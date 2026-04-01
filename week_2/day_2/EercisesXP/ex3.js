
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// output will be ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']


const country = "USA";
console.log([...country]);
// output will be ['U', 'S', 'A']


let newArray = [...[,,]];
console.log(newArray);

// [undefined, undefined]


