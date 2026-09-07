import http from "http"; //importing http module, to create the server 
import fs from "fs"; //importing fs module,
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFile = path.join(__dirname, "log.txt");

const server = http.createServer((req, res) => {
  const time = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: true, // to make it 12 hour format
  });

  const log = `[${time}] ${req.method} ${req.url}\n`;

  fs.appendFile(logFile, log, () => {});

  if (req.method === "GET" && req.url === "/") {
    res.end("Home Page");
  } else if (req.method === "GET" && req.url === "/about") {
    res.end("About Page");
  } else if (req.method === "GET" && req.url === "/page") {
    res.end("Page");
  } else if (req.method === "POST" && req.url === "/about") {
    res.end("POST request received");
  } else if (req.method === "POST" && req.url === "/page") {
    res.end("POST request received");
  } else if (req.method === "PUT" && req.url === "/about") {
    res.end("PUT request received");
  } else if (req.method === "PUT" && req.url === "/page") {
    res.end("PUT request received");
  } else if (req.method === "DELETE" && req.url === "/about") {
    res.end("About deleted");
  } else if (req.method === "DELETE" && req.url === "/page") {
    res.end("Page deleted");
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
