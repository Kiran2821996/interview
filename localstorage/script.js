const addDetails = document.querySelector(".addDetails");
const retrive = document.querySelector(".retrive");

const add_component = document.querySelector(".add_component");
const retrive_component = document.querySelector(".retrive_component");

const input_value = document.querySelector(".input_value");
const add = document.querySelector(".add");
let dataMap = document.querySelector(".data_map");

const search_value = document.querySelector(".search_value");
const submit = document.querySelector(".submit");
let retrive_map = document.querySelector(".retrive_map");

retrive_component.style.display = "none";

let detailsArr = [];
let storeArr = [];

const addDetailsInComponent = () => {
  retrive_component.style.display = "none";
  add_component.style.display = "block";
};

const retriveComponent = () => {
  add_component.style.display = "none";
  retrive_component.style.display = "block";
};

const displayDataInScreen = () => {
  dataMap.innerHTML = "";
  detailsArr.map((item, i) => {
    dataMap.innerHTML += `<div>
            <h1>${item}</h1>
            <button onclick="saveData(${item})" class="save">Save</button>
            <button onclick="deleteData(${i})">Delete</button>
            <div>
            `;
  });
};

const saveData = (item) => {
  storeArr = [...storeArr, item];
  localStorage.setItem("data", JSON.stringify(storeArr));
};

const deleteData = (index) => {
  detailsArr.splice(index, 1);
  storeArr.splice(index, 1);
  displayDataInScreen();
  localStorage.setItem("data", JSON.stringify(storeArr));
};

const addInputDetails = () => {
  detailsArr = [...detailsArr, input_value.value];
  displayDataInScreen();
};


const retriveData = () => {
  let fetchData = JSON.parse(localStorage.getItem("data"));
  console.log(fetchData)
  for (let i = 0; i < fetchData.length; i++) {
    if (parseInt(search_value.value) === fetchData[i]) {
      retrive_map.innerHTML += `<div>${fetchData[i]}</div>`;
    }
  }
};
add.addEventListener("click", () => addInputDetails());
addDetails.addEventListener("click", () => addDetailsInComponent());
retrive.addEventListener("click", () => retriveComponent());
submit.addEventListener("click", () => retriveData());
