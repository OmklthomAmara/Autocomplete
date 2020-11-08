const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const dataHandler = require("./handlers/getData");
const missingHandler = require("./handlers/missing");

const router = (req, res) => {
  const url = req.url;
  if (url === "/") {
    homeHandler(req, res);
  } else if (url.includes("/public")) {
    publicHandler(req, res);
  } else if (url.includes("/getdata")) {
    dataHandler(req, res);
  } else {
    missingHandler(req, res);
  }
};

module.exports = router;
