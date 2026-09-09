# HTTP Server with Node.js

A simple HTTP server built using **Node.js** to understand the fundamentals of creating a server, handling HTTP requests, working with routes, and sending responses.

## 🚀 Project Overview

This project demonstrates how to create an HTTP server using Node.js's built-in `http` module without using Express.js.

The server receives client requests, checks the requested URL and HTTP method, and returns an appropriate response.

This project was created as part of my **Node.js learning journey** to understand how HTTP servers work internally.

## 🎥 Project Demonstration

Watch the complete project demonstration:

[▶️ Watch the HTTP Server Project Video](https://drive.google.com/file/d/1Rzb-nACDdJD9bxR3srf71pvc3O8wB6bO/view?usp=sharing)

The video demonstrates the project execution and testing of the HTTP server.

---

---

## 🛠️ Technologies Used

* **Node.js**
* **JavaScript**
* **HTTP Module**
* **PowerShell / Terminal**
* **Git & GitHub**

---

## 📂 Project Structure

```text
http-server/
│
├── server.js
├── package.json
└── README.md
```

### `server.js`

Contains the main server implementation.

### `package.json`

Contains the project configuration and Node.js project information.

### `README.md`

Contains the documentation for the project.

---

## ⚙️ How It Works

The server is created using Node.js's built-in `http` module.

The basic flow is:

```text
Client
   │
   │ HTTP Request
   ▼
Node.js HTTP Server
   │
   ├── Check HTTP Method
   │
   ├── Check URL / Route
   │
   └── Generate Response
   │
   ▼
Client receives HTTP Response
```

The server listens for incoming requests and processes them according to the requested route and HTTP method.

---

## ▶️ How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/RoushanGoswami/NODE-JS.git
```

### 2. Open the project directory

```bash
cd NODE-JS/http-server
```

### 3. Start the server

```bash
node server.js
```

If the server starts successfully, it will listen for incoming HTTP requests.

---

## 🌐 Testing the Server

Once the server is running, open your browser and visit:

```text
http://localhost:3000
```

You can also test individual routes using PowerShell or another HTTP client.

Example:

```powershell
Invoke-WebRequest http://localhost:3000/about -Method GET
```

For a POST request:

```powershell
Invoke-WebRequest http://localhost:3000/about -Method POST
```

---

## 📡 HTTP Methods

This project demonstrates working with HTTP request methods.

### GET

Used to request data from the server.

```text
GET /about
```

### POST

Used to send data to the server.

```text
POST /about
```

The server can identify the HTTP method and respond accordingly.

---

## 🧪 Example Request

```text
GET http://localhost:3000/about
```

### Request Flow

```text
Browser / Client
       ↓
GET /about
       ↓
Node.js Server
       ↓
Route & Method Check
       ↓
Response
       ↓
Browser / Client
```

---

## 🎯 Learning Objectives

Through this project, I learned:

* How Node.js HTTP servers work
* How to create a server using the `http` module
* How to handle incoming requests
* How to read request URLs
* How to identify HTTP methods
* How to send HTTP responses
* How routing works at a basic level
* How to test APIs using PowerShell
* How localhost and ports work
* How to run Node.js applications from the terminal
* How to manage a Node.js project with Git and GitHub

---

## 🔗 Repository

GitHub Repository:

https://github.com/RoushanGoswami/NODE-JS/tree/main/http-server

---

## 📌 Future Improvements

Possible improvements for this project include:

* Add more routes
* Add proper status codes
* Return JSON responses
* Add request body handling
* Add error handling
* Create a reusable routing system
* Add middleware functionality
* Convert the project to Express.js
* Connect the server with MongoDB
* Build a complete REST API

---

## 👨‍💻 Author

**Roushan Goswami**

Full Stack Web Development Learner

GitHub:
https://github.com/RoushanGoswami

---

## ⭐ Conclusion

This project helped me understand the fundamentals of **HTTP servers and backend development with Node.js**.

Instead of directly using a framework such as Express.js, building the server using Node.js's native `http` module provides a better understanding of what happens behind the scenes when a client sends an HTTP request to a server.

More Node.js projects coming soon. 🚀

