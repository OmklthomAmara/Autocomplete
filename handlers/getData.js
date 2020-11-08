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
    newArr.push(result[i]["title"]);
  }
  return newArr;
}
module.exports = getDataFunction;
