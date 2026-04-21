function isAnagram(str1, str2) {

  const cleanOne = str1.replace(/\s/g, '').toLowerCase();
  const cleanTwo = str2.replace(/\s/g, '').toLowerCase();

  if (cleanOne.length !== cleanTwo.length) {
    return false;
  }

  const sortedOne = str1.split('').sort().join('');
  const sortedTwo = str2.split('').sort().join('');

  return sortedOne === sortedTwo;
}

console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
console.log(isAnagram('Dormitory', 'Dirty Room')); // true  