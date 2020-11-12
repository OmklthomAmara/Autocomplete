const fs = require("fs");
const path = require("path");
const missingHandler = require("../handlers/missing");

const homeFunction = (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");

  fs.readFile(filePath, (error, file) => {
    if (error) {
      missingHandler(req, res);
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(file);
    }
  });
};

module.exports = homeFunction;
