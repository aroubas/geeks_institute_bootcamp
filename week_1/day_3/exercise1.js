const headers = document.querySelector('h1');
console.log(headers.textContent);

const article= document.querySelector('article');
article.removeChild(article.lastElementChild);


const heading = document.querySelector('h2');
heading.addEventListener('click', () => {
    heading.style.backgroundColor = 'red';
});

const heading3 = document.querySelector('h3');
heading3.addEventListener('click', () => {
    heading3.style.display= 'none';
});

const boldBtn = document.querySelector("#boldButton");
const makeItBold = document.querySelectorAll('p');
boldBtn.addEventListener('click',() =>{
  makeItBold.forEach(p =>{
    p.style.fontWeight = 'bold';
  });
});

headers.addEventListener('mouseenter',() => 
  {const randomSize = Math.floor(Math.random()*101);
  headers.style.fontSize = randomSize + "px";
});

const paraghraph = document.querySelectorAll('p');
paraghraph.forEach(p => {
  p.style.transition = 'opacity 0.5s ease';
p.addEventListener('mouseover',()=>
{
p.style.opacity = '0';
})
});