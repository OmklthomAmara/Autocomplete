//  random gif

const request = require("request");
const api_key = "OiRmKWWUtNcSOtfRmlVDgYzuRKHSZPsz";

module.exports = (req, response) => {
  const search = new URLSearchParams(req.url.split("?")[1]);
  const input = search.get("name");
  let randomGifAPIUrl = `http://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${input}`;

  request(randomGifAPIUrl, function (err, res, body) {
    if (err) {
      throw new Error("database failed to connect");
    } else {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(body);
    }
  });
};
