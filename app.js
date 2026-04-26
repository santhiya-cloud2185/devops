const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello Meena DevOps 🚀");
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
