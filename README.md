# Angular & Go To-Do List

This guide provides step-by-step instructions for setting up and running the project. Follow these steps to get started.

---

## Prerequisites

Before starting, ensure the following tools are installed on your system:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Angular CLI**
- **Go (Golang)**: [Download Go](https://go.dev/dl/)

Install globally by running:
  ```bash
  npm install -g @angular/cli
  ```

## Getting Started

### Clone the repo
```bash
git clone https://github.com/maxstein16/angular-go-todo.git
```

## Go Setup

### Navigate to the Project Directory

```bash
cd backend
```

### Initialize the Go module

```bash
go mod init backend
```

### Install Dependencies

```bash
go get -u github.com/gin-contrib/cors
go get -u github.com/gin-gonic/gin
go get -u github.com/joho/godotenv
```

### Start the Development Server

```bash
go run main.go
```

## Angular Setup

### Navigate to the Project Directory

```bash
cd frontend
```

### Install Libraries

```bash
npm install
npm install @angular/material
npm install @ngrx/store
npm install axios
```

### Start the Project

```bash
ng serve
```

