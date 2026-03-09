  
  //Create an array called colors where the value is a list of your five favorite colors.
  const colors = ["green","white","black","yellow","blue"];
  const suffixes =['st','sc','rd','th','th']

   //Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
  for(let i = 0;i <= colors.length-1;i++){
    console.log(`My #${i+1} choice is ${colors[i]}`);
  }

  console.log('////////////////////////////////////////////////////////////////////');
  console.log('////////////////////////////////////////////////////////////////////');
  console.log('////////////////////////////////////////////////////////////////////');
  console.log('////////////////////////////////////////////////////////////////////');



  //Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
  for(let i = 0;i <= colors.length-1;i++){
    console.log(`My ${i+1}${suffixes[i]} choice is ${colors[i]}`);
  }




 