// 1. Setup variables
const canvas = document.querySelector('.canvas');
const colorButtons = document.querySelectorAll('.color-btn');
const clearButton = document.querySelector('.Clear-button');
let selectedColor = 'white'; 
let isDrawing = false; 


function createGrid() {
    
    canvas.innerHTML = '';
    
 
    const cellSize = 25; 
    
   
    const cols = Math.floor(canvas.clientWidth / cellSize);
    const rows = Math.floor(canvas.clientHeight / cellSize);
    const totalCells = cols * rows;

  
    canvas.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        
        
        cell.addEventListener('mousedown', () => {
            cell.style.backgroundColor = selectedColor;
            isDrawing = true;
        });

        cell.addEventListener('mouseover', () => {
            if (isDrawing) cell.style.backgroundColor = selectedColor;
        });

        canvas.appendChild(cell);
    }
}


colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedColor = window.getComputedStyle(button).backgroundColor;
    });
});


clearButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = 'white');
});


window.addEventListener('mouseup', () => {
    isDrawing = false;
});


window.addEventListener('load', createGrid);
window.addEventListener('resize', createGrid);