function calculateAverage(gradeList){
  let sum = 0;
  for(let i = 0;i < gradeList.length;i++){
    sum += gradeList[i];
  }
  return sum / gradeList.length; 
}

function findAvg(gradesList){
  const average = calculateAverage(gradesList);
  if(average >= 65){
    return "Pass";  
  }else{
    return "Fail";
  } 
}

const gradesList = [70, 80, 90];
console.log(findAvg(gradesList));
