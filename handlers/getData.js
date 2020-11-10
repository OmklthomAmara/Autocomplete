const data = require("../restaurants.json");

const getDataFunction = (req, res) => {
  const search = new URLSearchParams(req.url.split("?")[1]);
  const input = search.get("name");
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(autoComplete(input, data)));
};

function autoComplete(input, data) {
  const result = data.filter((e) =>
    e["title"].toLowerCase().includes(input.toLowerCase())
  );
  let newArr = [];
  for (let i = 0; i < result.length; i++) {
    newArr.push({
      title: result[i]["title"],
      img: result[i]["image"],
      type: result[i]["type"],
    });
  }
  return newArr;
}
module.exports = getDataFunction;
