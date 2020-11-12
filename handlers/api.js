//  random gif
const request = require("request");

module.exports = (req, response) => {
  const api_key = process.env.Api_key;
  const search = new URLSearchParams(req.url.split("?")[1]);
  const input = search.get("name");
  let randomGifAPIUrl = `http://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${input}`;

  request(randomGifAPIUrl, function (err, res, body) {
    if (err) {
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Not found</h1>");
    } else {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(body);
    }
  });
};
