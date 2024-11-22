package main

import (
	"log"
	"presentation-project/todo"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize Gin router
	router := gin.Default()

	// Enable CORS
	router.Use(cors.Default())

	// Define a simple route
	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello, Gin!",
		})
	})

	// Register routes
	todo.TodoRoutes(router)

	port := "8080"

	// Start the server
	log.Printf("Server running on port %s", port)
	err := router.Run(":" + port)
	if err != nil {
		log.Fatal(err)
	}
}
