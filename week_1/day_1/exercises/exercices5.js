//Create an object called family with a few key value pairs.
const family ={
  familyName : "Mouha",
  numberOfpersons : 7,
  NamesOfchildren : ["Mehdi","Marouane","Karim"],
}

//Using a for in loop, console.log the keys of the object.
for(let key in family){
  console.log(key);
}

    console.log("//////////////////////////////////////////////////////////////");
//Using a for in loop, console.log the values of the object.
for(let key in family){
  console.log(family[key]);
}