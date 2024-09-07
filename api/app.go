package main

import (
	"api/routes"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	routes.InitRedis(os.Getenv("REDIS_API_KEY"))

	http.HandleFunc("/api/locate/", routes.IpInfoHandler)
	http.HandleFunc("/api/last-visitor", routes.LastVisitorHandler)

	log.Println("Started server")
	log.Println("Local: http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
