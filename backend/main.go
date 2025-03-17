package main

import (
	"fmt"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Item struct {
	Name  string  `json:"name"`
	Price float64 `json:"price"`
}

func main() {
	fmt.Printf("running")
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // Frontend origin
		AllowMethods:     []string{"POST", "GET", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		AllowCredentials: true,
	}))
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	list := []string{"item1", "item2"}
	r.POST("/items", func(c *gin.Context) {
		var newItem Item
		if err := c.BindJSON(&newItem); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// Do something with the item (e.g., save to DB)

		c.JSON(http.StatusOK, gin.H{"message": "Item received!", "item": newItem, "iitems": list})
	})
	r.Run()
}
