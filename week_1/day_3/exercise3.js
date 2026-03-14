let allBoldItems;
function getBoldItems(){
  allBoldItems = document.querySelectorAll('strong');
}

function highlight(){
getBoldItems();
allBoldItems.forEach(item => {
  item.style.color = 'blue';
});
}

function returnItemsToDefault(){
getBoldItems();
  allBoldItems.forEach(item => {
  item.style.color = 'black';
});
}

const paragraph = document.querySelector('p');

paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);