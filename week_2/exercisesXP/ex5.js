function convertKGtogram(kg){
  return kg  *1000;
}
const result = convertKGtogram(5);
console.log(result);


// const convertKGtogram = function(kg){
//   return kg * 1000;
// }

// console.log(convertKGtogram(11));


 // Function declarations are hoisted (can be called before they are defined), while function expressions are not.

//  const convertKGtogram = (kg) => kg * 1000;
//  console.log(convertKGtogram(3));