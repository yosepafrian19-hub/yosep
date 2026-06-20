
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("SERVER HIDUP 🚀");
});

server.listen(port, () => {
  console.log("Server jalan di port " + port);
});
