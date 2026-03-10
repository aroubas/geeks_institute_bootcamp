//Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let societyName = " ";
for(let i = 0;i<names.length;i++){
  societyName = societyName + names[i][0];
}
console.log(societyName);