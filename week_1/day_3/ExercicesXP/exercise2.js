const formHead = document.querySelector('form');
console.log(formHead);

console.log(formHead.elements);

const names = formHead.elements;
for (let i =0; i < names.length; i++){
  console.log(names[i].name);
}


formHead.addEventListener('submit', (event) => {
    event.preventDefault();

    const first = formHead.elements.fname.value;
    const last = formHead.elements.lname.value;
    console.log("First name:",first);
    console.log("Last Name:", last);
    const list = document.querySelector('.userAnswers');
    if(first && last){
      const li = document.createElement('li');
      li.textContent = first;
      list.appendChild(li);
      const li2 = document.createElement('li');
      li2.textContent = last;
      list.appendChild(li2);
      formHead.reset();
    }
});

