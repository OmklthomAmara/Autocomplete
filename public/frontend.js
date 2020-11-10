const input = document.querySelector("#search");
const submit = document.querySelector("#submit");
const dataList = document.querySelector("#dataList");
const container = document.querySelector(".container");
const selectedData = document.querySelector("#selected_data");
const giff = document.querySelector("#gif");
let selectedResturant;
input.addEventListener("keyup", () => {
  fetch(`http://localhost:3000/getdata/?name=${input.value}`)
    .then((res) => res.json())
    .then((listArr) => {
      addListToDom(listArr);
      selectedResturant = listArr[0];
    });
});

function addListToDom(listArr) {
  dataList.innerHTML = "";
  listArr.forEach((element) => {
    const option = document.createElement("option");
    option.value = element["title"];
    dataList.appendChild(option);
  });
}
const addSelectedData = (selectedResturant) => {
  const type = selectedResturant["type"];
  console.log(selectedResturant);
  console.log(type);
  selectedData.innerHTML = `<h2>FOOD MENU:</h2>`;
  type.forEach((e) => {
    selectedData.innerHTML += ` <br> *${e} <br>`;
  });
  //selectedData.innerHTML = `<img src='${img}' width='400px' height='150px' />`;
};

submit.addEventListener("click", () => {
  addSelectedData(selectedResturant);
  fetch(`http://localhost:3000/api/?name=${input.value}`)
    .then((res) => res.json())
    .then((res) => {
      // giff.innerHTML = `<img src='${res.data.image_original_url}' width='300px' height='300px' />`;
    });
  fetch(`http://localhost:3000/server2/?name=${input.value}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      selectedData.innerHTML += `<img src='${res[0].image}' width='300px' height='300px' />`;
    });
});
