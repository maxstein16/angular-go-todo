package todo

import (
	"github.com/gin-gonic/gin"
)

func TodoRoutes(r *gin.Engine) {
	r.GET("/todos", func(c *gin.Context) {

	})

	r.POST("/todos", func(c *gin.Context) {

	})

	r.PUT("/todos/:id", func(c *gin.Context) {

	})

	r.DELETE("/todos/:id", func(c *gin.Context) {

	})
}
