package routes

import (
	"context"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/go-redis/redis/v8"
)

type IpApiResponse struct {
	City       string `json:"city"`
	RegionCode string `json:"region_code"`
}

type ApiResponse struct {
	Status string `json:"status"`
	City   string `json:"city"`
	Region string `json:"region_code"`
}

var (
	ctx    = context.Background()
	Client *redis.Client
)

func InitRedis(redisURL string) {
	opt, err := redis.ParseURL(redisURL)
	if err != nil {
		log.Fatalf("Failed to parse Redis URL: %v", err)
	}

	Client = redis.NewClient(opt)
	if _, err := Client.Ping(ctx).Result(); err != nil {
		log.Fatalf("Failed to connect to Redis: %v", err)
	}
}

func IpInfoHandler(w http.ResponseWriter, r *http.Request) {
	ip := strings.TrimPrefix(r.URL.Path, "/api/locate/")

	if ip == "" {
		http.Error(w, "IP address is required", http.StatusBadRequest)
		return
	}

	city, err := Client.HGet(ctx, ip, "city").Result()
	if err == nil {
		region, _ := Client.HGet(ctx, ip, "region").Result()
		apiResponse := ApiResponse{
			Status: "success",
			City:   city,
			Region: region,
		}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(apiResponse)
		return
	}

	ipapiClient := http.Client{}
	req, err := http.NewRequest("GET", "https://ipapi.co/"+ip+"/json/", nil)
	if err != nil {
		http.Error(w, "Error creating request", http.StatusInternalServerError)
		return
	}
	req.Header.Set("User-Agent", "ipapi.co/#go-v1.5")
	resp, err := ipapiClient.Do(req)
	if err != nil {
		http.Error(w, "Error making request to IPAPI", http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		http.Error(w, "Error reading response from IPAPI", http.StatusInternalServerError)
		return
	}

	var ipResponse IpApiResponse
	if err := json.Unmarshal(body, &ipResponse); err != nil {
		http.Error(w, "Error parsing JSON response", http.StatusInternalServerError)
		return
	}

	err = Client.HSet(ctx, "Last Visitor", "city", ipResponse.City).Err()
	if err != nil {
		log.Printf("Failed to store city in Redis: %v", err)
	}
	err = Client.HSet(ctx, "Last Visitor", "region", ipResponse.RegionCode).Err()
	if err != nil {
		log.Printf("Failed to store region in Redis: %v", err)
	}
	err = Client.Expire(ctx, "Last Visitor", 2*time.Hour).Err()
	if err != nil {
		log.Printf("Failed to set expiration in Redis: %v", err)
	}

	apiResponse := ApiResponse{
		Status: "success",
		City:   ipResponse.City,
		Region: ipResponse.RegionCode,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(apiResponse)
}
