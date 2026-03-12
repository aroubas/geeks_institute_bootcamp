const divContainer = document.getElementById("container");
console.log(divContainer);

const firstList = document.querySelectorAll(".list")[0];
firstList.querySelectorAll("li")[1].textContent="richard";

const secondelist = document.querySelectorAll(".list")[1];
const itemsToDelete = secondelist.querySelectorAll("li")[1];
secondelist.removeChild(itemsToDelete);

const changelistname = document.querySelectorAll(".list");
changelistname.forEach((list) => {
  const firstitem = list.querySelector("li");
  firstitem.textContent ="mehdi";
});