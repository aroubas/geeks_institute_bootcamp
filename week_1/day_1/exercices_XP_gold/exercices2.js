let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
let nameofguest = prompt("write your name:");
if(nameofguest in guestList){
  console.log(`Hi! I'm ${nameofguest}, and I'm from ${guestlist[nameofguest]}`)
}else{
  console.log("Hi'm new!");
}
