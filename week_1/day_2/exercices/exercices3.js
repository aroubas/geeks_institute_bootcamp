 function changeEnough(itemPrice, amountOfChange){
  let sum = 0;
  for(let coin of amountOfChange){
    sum += coin; 
  }if(sum >= itemPrice){
      return true;
    }else{
      return false;
    }
}
 console.log(changeEnough(9,[2,3,2]));