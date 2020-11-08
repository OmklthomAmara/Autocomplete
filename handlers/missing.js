const missingFunction = (req, res) => {
  res.writeHead(404, { "content-type": "text/html" });
  res.end("<h1>Not found</h1>");
};

module.exports = missingFunction;
