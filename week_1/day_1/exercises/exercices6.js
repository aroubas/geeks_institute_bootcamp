//Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

let phrase = " ";
for(let key in details){
  phrase = phrase +  key + " " + details[key] + " ";
}
  console.log(phrase);