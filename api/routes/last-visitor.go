package routes

import (
	"encoding/json"
	"net/http"
)

func GetVisitorKey() (string, error) {
	city := Client.HGet(ctx, "Visitor", "city")
	region := Client.HGet(ctx, "Visitor", "region")

	return city.Val() + ", " + region.Val(), nil
}

func LastVisitorHandler(w http.ResponseWriter, r *http.Request) {
	visitorValue, err := GetVisitorKey()
	if err != nil {
		http.Error(w, "Error retrieving value from Redis", http.StatusInternalServerError)
		return
	}

	if visitorValue == "" {
		http.Error(w, "Visitor key does not exist", http.StatusNotFound)
		return
	}

	apiResponse := struct {
		Status   string `json:"status"`
		Location string `json:"location"`
	}{
		Status:   "success",
		Location: visitorValue,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(apiResponse)
}
