const dataHandler = require("./handlers/dataserver");
const missingHandler = require("./handlers/missing");

const router = (req, res) => {
  const url = req.url;
  if (url.includes("/api")) {
    dataHandler(req, res);
  } else {
    missingHandler(req, res);
  }
};

module.exports = router;
