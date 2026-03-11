//Create a function call displayNumbersDivisible() that takes no parameter.
//In the function, loop through numbers 0 to 500.
//Console.log all the numbers divisible by 23.
//At the end, console.log the sum of all numbers that are divisible by 23.
//Bonus: Add a parameter divisor to the function.
function displayNumbersdivisible(divisor){
      let sum = 0;
      let outputstring = "outcome:";
  
  for(let i = divisor;i <= 500;i++){
    if(i % divisor == 0){
      outputstring += i + " ";
      sum += i;
    }
  }
  console.log(outputstring);
  console.log("the sum is:"+sum);
}
displayNumbersdivisible(45);


