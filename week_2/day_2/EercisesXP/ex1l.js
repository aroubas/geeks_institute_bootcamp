const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

const displayColors = () => {
  colors.forEach((color,i) => {
  console.log(`${i+1}# choice is ${color}`);
});
};

displayColors();

const checkValue = ()=>{
const hasViolet = colors.some((color)=>color === "Violet");
if (hasViolet) {
    console.log("Yeah");
  } else {
    console.log("No...");
  }
};
checkValue();