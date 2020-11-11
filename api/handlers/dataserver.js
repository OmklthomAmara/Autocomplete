const data = require("../../Data/restaurants.json");

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
