const input = document.querySelector("#search");
const submit = document.querySelector("#submit");
const dataList = document.querySelector("#dataList");
const container = document.querySelector(".container");
const selectedData = document.querySelector("#selected_data");
const giff = document.querySelector("#gif");

const local = `http://localhost:3000`;
const online = `https://Autocomplete-om.herokuapp.com`;

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
const addSelectedData = (type) => {
  selectedData.innerHTML = `<span style='text-decoration: underline;'><h2>Food Menu:</h2></span>`;
  type.forEach((e) => {
    selectedData.innerHTML += ` <br> *  ${e} <br>`;
  });
};

submit.addEventListener("click", () => {
  //fetching data from random gif API
  fetch(`http://localhost:3000/api/?name=${input.value}`)
    .then((res) => res.json())
    .then((res) => {
      giff.innerHTML = `<img src='${res.data.image_original_url}' width='300px' height='300px' />`;
    });

  //fetching data from server 2
  fetch(`http://localhost:3000/server2/?name=${input.value}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        selectedData.innerHTML = "<h1>something went wrong</h1>";
      } else {
        addSelectedData(res[0].type);
        selectedData.innerHTML += `<img src='${res[0].image}'/>`;
      }
    })
    .catch((err) => console.log(err));
  input.value = "";
});
