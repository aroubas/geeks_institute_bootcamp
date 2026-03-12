  const divId = document.getElementById('navBar');

  divId.setAttribute('id','socialNetworkNavigation');
  console.log(divId);

  const newElement = document.createElement("li");
  
  const textNode = document.createTextNode("Logout");

  newElement.appendChild(textNode);

  const list = document.querySelector("ul");
  list.appendChild(newElement);

  const firstItem = list.firstElementChild;
  console.log(firstItem.textContent);

  const lastItem = list.lastElementChild;
   console.log(lastItem.textContent);

