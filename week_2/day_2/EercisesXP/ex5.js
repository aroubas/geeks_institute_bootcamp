
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combine = epic.reduce((acc,items)=>acc +" "+items,"");
console.log(combine);