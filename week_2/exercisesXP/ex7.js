(function(user) {
    const nav = document.getElementById('navbar');
    
    // Create the div
    const div = document.createElement('div');
    
    // Add the name
    div.textContent = user;
    
    // Add the image
    const img = document.createElement('img');
    img.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
    img.setAttribute('width', '50');
    
    // Put img inside div, then div inside nav
    div.appendChild(img);
    nav.appendChild(div);

})('John');