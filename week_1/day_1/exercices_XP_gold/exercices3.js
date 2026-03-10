//1. Console.log the sum of all the numbers in the age array.

let age = [20,5,12,43,98,55];

let sum = 0;
for(let i = 0;i<age.length;i++){
sum += age[i];
}
console.log(sum);

//2. Console.log the highest age in the array.
let highestAge=0;
for(let i = 0;i<age.length;i++){
  if(age[i] > highestAge){
    highestAge = age[i];
}
}
    console.log("the highest age is ",highestAge)
