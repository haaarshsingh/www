package main

import (
	"api/routes"
	"log"
	"net/http"
	"os"
)

func main() {
	routes.InitRedis(os.Getenv("REDIS_KEY"))

	http.HandleFunc("/api/locate/", routes.IpInfoHandler)
	http.HandleFunc("/api/last-visitor", routes.LastVisitorHandler)

	log.Println("Started server")
	log.Println("Local: http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
