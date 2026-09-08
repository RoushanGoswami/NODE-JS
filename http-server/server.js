import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFile = path.join(__dirname, "log.txt");

const server = http.createServer((req, res) => {
  const time = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: false,
  });

  const log = `[${time}] ${req.method} ${req.url}\n`;

  fs.appendFile(logFile, log, () => {});

  if (req.method === "GET" && req.url === "/") {
    res.end("Home Page");
  } else if (req.method === "GET" && req.url === "/about") {
    res.end("About Page");
  } else if (req.method === "GET" && req.url === "/page") {
    res.end("Page");
  } else if (req.method === "POST" && req.url === "/") {
    res.end("Home data added");
  } else if (req.method === "POST" && req.url === "/about") {
    res.end("About data added");
  } else if (req.method === "POST" && req.url === "/page") {
    res.end("Page data added");
  } else if (req.method === "PUT" && req.url === "/") {
    res.end("Home data updated");
  } else if (req.method === "PUT" && req.url === "/about") {
    res.end("About data updated");
  } else if (req.method === "PUT" && req.url === "/page") {
    res.end("Page data updated");
  } else if (req.method === "DELETE" && req.url === "/") {
    res.end("Home data deleted");
  } else if (req.method === "DELETE" && req.url === "/about") {
    res.end("About data deleted");
  } else if (req.method === "DELETE" && req.url === "/page") {
    res.end("Page data deleted");
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server started successfully !");
});

//Invoke-WebRequest http://localhost:3000/about -Method POST -UseBasicParsingy
