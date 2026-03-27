function makeJuice(Drinksize){
  let ingredients = [];

  function addIngredients(ingredient1,ingredient2,ingredient3){
     ingredients.push(ingredient1,ingredient2,ingredient3);
  }
     function displayJuice(){
    const div =  document.getElementById('Para');
    const P = document.createElement('p');
    P.textContent = `The client wants a ${Drinksize} juice, containing ${ingredients.join(', ')}.`;
    div.appendChild(P);
}
  addIngredients('banane','strawberry','lemonade');
  addIngredients('apple', 'orange', 'carrot');
  displayJuice();
}

makeJuice('Small');
 