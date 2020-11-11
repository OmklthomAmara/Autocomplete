const http = require("http");
const router = require("./router");
require("dotenv").config({ path: __dirname + "/.env" });
const PORT = process.env.PORT || 3000;

const server = http
  .createServer(router)
  .listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
