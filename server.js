const { createServer } = require("node:http");

const PORT = 3005;

const server = createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to the Home Page!");
  } else if (req.url === "/route" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("You have reached the /route endpoint.");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
