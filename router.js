const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const dataHandler = require("./handlers/getData");
const missingHandler = require("./handlers/missing");
const apiHandler = require("./handlers/api");
const server2Handler = require("./handlers/sever2RequestData");

const router = (req, res) => {
  const url = req.url;
  if (url === "/") {
    homeHandler(req, res);
  } else if (url.includes("/public")) {
    publicHandler(req, res);
  } else if (url.includes("/getdata")) {
    dataHandler(req, res);
  } else if (url.includes("/api")) {
    apiHandler(req, res);
  } else if (url.includes("/server2")) {
    server2Handler(req, res);
  } else {
    missingHandler(req, res);
  }
};

module.exports = router;
