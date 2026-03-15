const libBtn = document.getElementById('lib-button');
 
libBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    const values = [
    document.getElementById('noun').value,
    document.getElementById('adjective').value,
    document.getElementById('person').value,
    document.getElementById('verb').value,
    document.getElementById('place').value
];
    let isEmpty = false;
for(let i = 0; i < values.length;i++){
  if(values[i].trim()=== ""){
    isEmpty = true;
  }
}
if(isEmpty){
  alert("Hey,you miss something!");
  return;
}
const stories = [
    `${values[2]} went to the ${values[4]} and saw a ${values[1]} ${values[0]}.`,
    `In the middle of ${values[4]}, ${values[2]} found a very ${values[1]} ${values[0]}!`,
    `${values[2]} tried to ${values[3]} with a ${values[1]} ${values[0]} at the ${values[4]}.`
];

const randomIndex = Math.floor(Math.random() * stories.length);

const storyText = stories[randomIndex];

const storySpan = document.getElementById('story');
storySpan.textContent = storyText;
})