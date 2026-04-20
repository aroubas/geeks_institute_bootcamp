const robots = [
    { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', image: 'https://robohash.org/1?200x200' },
    { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', image: 'https://robohash.org/2?200x200' },
    { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', image: 'https://robohash.org/3?200x200' },
    { id: 4, name: 'Patricia Lebsack', email: 'Julianne.OConner@kory.org', image: 'https://robohash.org/4?200x200' },
    { id: 5, name: 'Chelsey Dietrich', email: 'Lucio_Hettinger@annie.ca', image: 'https://robohash.org/5?200x200' },
    { id: 6, name: 'Mrs. Dennis Schulist', email: 'Karley_Dach@jasper.info', image: 'https://robohash.org/6?200x200' },
    { id: 7, name: 'Kurtis Weissnat', email: 'Telly.Hoeger@billy.biz', image: 'https://robohash.org/7?200x200' },
    { id: 8, name: 'Nicholas Runolfsdottir V', email: 'Sherwood@rosamond.me', image: 'https://robohash.org/8?200x200' },
    { id: 9, name: 'Glenna Reichert', email: 'Chaim_McDermott@dana.io', image: 'https://robohash.org/9?200x200' },
    { id: 10, name: 'Clementina DuBuque', email: 'Rey.Padberg@karina.biz', image: 'https://robohash.org/10?200x200' }
];

const container = document.getElementById('robot-container');
const searchBox = document.getElementById('searchBox');

function displayRobots(robotArray) {
    container.innerHTML = "";
    robotArray.forEach(robot => {
        container.innerHTML += `
            <div class="card">
                <img src="${robot.image}" alt="robot">
                <h2>${robot.name}</h2>
                <p>${robot.email}</p>
            </div>
        `;
    });
}

searchBox.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    const filtered = robots.filter(robot => robot.name.toLowerCase().includes(text));
    displayRobots(filtered);
});

// Start the app
displayRobots(robots);