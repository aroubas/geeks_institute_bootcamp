const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];


const displayColors = () => {
  colors.forEach((color,i) => {
    let suffix = (i +1<= 3)?ordinal[i+1]:ordinal[0];
  console.log(`${i+1}${suffix} is ${color}.`);
});
};

displayColors();