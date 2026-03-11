function hotelCost(finalnights){
//let nights ;
//   do{
//   nights = prompt("How many nights you would stay at the hotel ?");
// }while(isNaN(Number(nights)));
// let finalnights=Number(nights);
return finalnights * 140;
}

//*Define a function called planeRideCost().
//It should ask the user for their destination.
//If the user doesn’t answer or if the answer is not a string, ask again.
//The function should return a different price depending on the location.
//“London”: 183$
//“Paris” : 220$ *//
//All other destination : 300$

function planeRideCost(destination){
//   let destination ;
//   do{
//   destination = prompt("what is your destination ?");
// }while(!isNaN(Number(nights)));
// let price;
if(destination === "london")
  return price = 183;
if(destination === "paris")
  return price = 220;
 return price = 300;
// console.log("The price to " + destination + " is $" + price);
// return price;
}


//Define a function called rentalCarCost()

function rentalCarCost(daysofrenting){
  // do{
  //   daysofrenting = prompt("How many days you would rent the car?")
  // }while(daysofrenting === null || daysofrenting.trim() === "" ||isNaN(Number(daysofrenting)));
  
  // let days = Number(daysofrenting);
  let totalcost = daysofrenting* 40;
  if(daysofrenting>=10){
   totalcost=totalcost * 0.95;
  }
  return totalcost;
}

//Define a function called totalVacationCost()

function totalVacationCost(){
  let totalvacation;

  let nights = Number(prompt("How many nights at the hotel?"));
  let destination = prompt("What is your destination (london/paris/other)?");
  let carDays = Number(prompt("How many days to rent the car?"));

  let car =rentalCarCost(carDays);
  let plane= planeRideCost(destination);
  let hotel = hotelCost(nights);

  totalvacation = hotel + plane + car;
  
  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
  return totalvacation;
}
console.log(totalVacationCost());
