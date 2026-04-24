// Function 1: Convert all elements to uppercase
function makeAllCaps(array) {
  return new Promise((resolve, reject) => {

    const allStrings = array.every(items => typeof items === "string");
    if(allStrings){
      const upperArray = array.map(word => word.toUpperCase());
      resolve(upperArray);
    }else{
      reject("Error:All items in the array must be strings!");
    }
  })
};

function sortWords(array){
  return new Promise((resolve, reject) => {
    if(array.length > 4){
      resolve([...array].sort());
    } else{
      reject("Error: Array length must be greater than 4!");
    }
  });
}

makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

// 2. Rejects because length is only 3
makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

// 3. Resolves and sorts correctl
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));
