
//Prompt the user for a number.
const userInput = "3"; 
console.log('the type of data before conversion is:',typeof userInput);

const numericValue = Number(userInput);
console.log('the type of data after conversion is:',typeof numericValue);
console.log('the value is ', numericValue);

//While the number is smaller than 10 continue asking the user for a new number.
let number;
do{
  number = prompt("write a number greater than 10!");
}while(number <= 10);
  console.log("success")

