import http from "http";

const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "Content-Type": "text/plain" }); // .writeHead (statusCode,{"content-type":mention here ur Type })
  //   res.end("Hello, I'm Back !"); // .end() => used to return the data

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("this is the end ! ");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hold Your Breadth !");
  } else if (req.url === "/end") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("and count... 😅🔥💯");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("page not found !");
  }
});

// here u have to start the server
// using .listen we can start the server => like .listen(PortCode,()=>{.. in this write simple message })
server.listen(3000, () => {
  console.log("server started successfully !");
});
// to start this server write fileName like server.js with node
