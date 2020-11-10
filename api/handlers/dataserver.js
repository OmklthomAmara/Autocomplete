const data = require("../../restaurants.json");
// `http://localhost:3000/server2/?name=${input.value}`
// `http://localhost:4000/api/?name=${input}`
const getApiData = (req, res) => {
  const search = new URLSearchParams(req.url.split("?")[1]);
  const input = search.get("name");
  res.writeHead(200, {
    "content-type": "application/json",
  });
  res.end(
    JSON.stringify(
      data.filter((element) => {
        return element.title.toLowerCase() == input.toLowerCase();
      })
    )
  );
};

module.exports = getApiData;
