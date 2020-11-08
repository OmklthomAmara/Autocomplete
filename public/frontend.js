const input = document.querySelector("#search");
const submit = document.querySelector("#submit");
const dataList = document.querySelector("#dataList");
const container = document.querySelector(".container");

input.addEventListener("keyup", () => {
  fetch(`http://localhost:3000/getdata/?name=${input.value}`)
    .then((res) => res.json())
    .then((listArr) => {
      if (container.children[2].children.length == 0) {
        addListToDom(listArr);
      } else {
        container.lastChild.innerHTML = "";
        addListToDom(listArr);
      }
      if (input.value == "") {
        container.lastChild.innerHTML = "";
      }
    });
});

function addListToDom(listArr) {
  listArr.map((element) => {
    const option = document.createElement("option");
    option.value = element;
    dataList.appendChild(option);
  });
  container.appendChild(dataList);
}
