 function changeEnough(itemPrice, amountOfChange){
  const values = [0.25, 0.10, 0.05, 0.01];
  let sum = 0;
  let totalcoin;
  for(let i = 0;i < amountOfChange.length;i++){
    totalcoin = amountOfChange[i]* values[i];
    sum += totalcoin;
  }if(sum>= itemPrice){
      return true;
    }else{
      return false;
    }
}
 console.log(changeEnough(4.25,[25, 20, 5, 0]));