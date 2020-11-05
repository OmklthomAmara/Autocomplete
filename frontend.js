const input = document.querySelector("#search");
const submit = document.querySelector("#submit");
const container = document.querySelector(".container");
const array = [
  { name: "a" },
  { name: "ab" },
  { name: "b" },
  { name: "abc" },
  { name: "d" },
  { name: "abcd" },
  { name: "aa" },
  { name: "aaa" },
  { name: "abb" },
];

input.addEventListener("keyup", () => {
  console.log(input.value);
  console.log(autoComplte(input.value, array));
  const listArr = autoComplte(input.value, array);
  if (container.children.length == 2) {
    addListToDom(listArr);
  } else {
    container.lastChild.remove();
    addListToDom(listArr);
  }
});

function autoComplte(input, array) {
  const result = array.filter((e) => e["name"].includes(input));
  let newArr = [];
  for (let i = 0; i < result.length; i++) {
    newArr.push(result[i]["name"]);
  }
  return newArr;
}

function addListToDom(listArr) {
  const list = document.createElement("ul");
  listArr.map((element) => {
    const li = document.createElement("li");
    li.innerHTML = element;
    list.appendChild(li);
  });
  container.appendChild(list);
}
