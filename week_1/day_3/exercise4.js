const form = document.getElementById('MyForm');

const Display = document.getElementById('resultDisplay');

form.addEventListener('submit',(event) =>{

  event.preventDefault();

  const radius = parseFloat(form.elements.radius.value);

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  Display.textContent="the volume is :" + volume.toFixed(2);
})