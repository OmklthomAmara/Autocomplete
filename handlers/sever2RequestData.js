const request = require("request");
//`http://localhost:3000/server2/?name=${input.value}`

module.exports = (req, response) => {
  const search = new URLSearchParams(req.url.split("?")[1]);
  const input = search.get("name");
  let Url = `http://localhost:4000/api/?name=${input}`;

  request(Url, function (err, res, body) {
    if (err) {
      throw new Error("database failed to connect");
    } else {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(body);
    }
  });
};
