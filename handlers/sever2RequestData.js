const request = require("request");
//`http://localhost:3000/server2/?name=${input.value}`
const missingHandler = require("../handlers/missing");
module.exports = (req, response) => {
  const search = new URLSearchParams(req.url.split("?")[1]);
  const input = search.get("name");
  let Url = `http://localhost:400/api/?name=${input}`;

  request(Url, function (err, res, body) {
    if (err) {
      response.writeHead(404, { "content-type": "application/json" });
      response.end(
        JSON.stringify({ message: "not found", statusCode: "404", error: true })
      );
      //missingHandler(req, response);
    } else {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(body);
    }
  });
};
