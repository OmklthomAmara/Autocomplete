const fs = require("fs");
const path = require("path");

const homeFunction = (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");

  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>Not found</h1>");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(file);
    }
  });
};

module.exports = homeFunction;
