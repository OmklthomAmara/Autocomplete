const http = require("http");
const router = require("./router");
const PORT = 3000;

const server = http
  .createServer(router)
  .listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
