const allBooks = [
  {
  title: "Ego is the Enemy",
  author: "Ryan Holiday", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyq7U6naBzoCbTzKTjJtxh2Lx1sX8Idx93yFSfc-BZzc_EodEDJDsNijPjI6g13N9bHqjwG0c1HlpMGPnzS6w6vGZsAy8XHR0SGz-G3oMg&s=10",
  alreadyRead: true
},
{
  title: "Atomic Habits",
  author: "James Clear",
  image: "https://images.gr-assets.com/books/1535115320l/40121378.jpg",
  alreadyRead: false
}
];

const targetSection = document.querySelector(".listBooks");

allBooks.forEach((book)=> {
const newDiv = document.createElement('div');
  newDiv.innerHTML=`
  <h3>${book.title}</h3>
    <p>Written by: ${book.author}</p>
    <img src="${book.image}" style="width: 100px;">
`;

if(targetSection){
  targetSection.appendChild(newDiv);
}
if(book.alreadyRead === true)
    newDiv.style.color= "red";
});
