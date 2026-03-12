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

const addClass = document.querySelectorAll(".list");
addClass.forEach((list) =>{
  list.classList.add("student_list");
});
console.log(addClass[0].classList);

divContainer.style.backgroundColor = "lightblue";
 
const lastPerson = secondelist.lastElementChild;
if(lastPerson){
  lastPerson.style.display="none";
}

const richardItem=firstList.querySelectorAll("li")[1];
richardItem.style.border = "3px solid green";

document.body.style.fontSize = "20px-";
