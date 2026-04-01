// 1. Array of Objects: The best way to store complex data
const planets = [
    { name: "Mercury", moons: 0, color: "#A5A5A5" },
    { name: "Venus", moons: 0, color: "#E3BB76" },
    { name: "Earth", moons: 1, color: "#2271B3" },
    { name: "Mars", moons: 2, color: "#E27B58" },
    { name: "Jupiter", moons: 5, color: "#D39C7E" }, // Using 5 moons for visual clarity
    { name: "Saturn", moons: 7, color: "#C5AB6E" },
    { name: "Uranus", moons: 3, color: "#BBE1E4" },
    { name: "Neptune", moons: 2, color: "#6081FF" }
];

const section = document.querySelector(".listPlanets");
section.innerHTML = ""; // Clear the deck

planets.forEach((planetData) => {
    // --- CREATE THE PLANET ---
    const planetDiv = document.createElement("div");
    
    // Add the shared "planet" class and a specific color class based on name
    planetDiv.classList.add("planet", planetData.name.toLowerCase());
    
    // Apply the background color from our object
    planetDiv.style.backgroundColor = planetData.color;
    planetDiv.textContent = planetData.name;
    planetDiv.style.color = "white";

    // --- CREATE THE MOONS (The Bonus) ---
    for (let i = 0; i < planetData.moons; i++) {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        
        // Offset each moon so they don't sit exactly on top of each other
        // Since moons are 'position: absolute', we move them based on their index (i)
        moonDiv.style.left = (i * 15) + "px"; 
        moonDiv.style.top = (i * 5) + "px";

        planetDiv.appendChild(moonDiv);
    }

    // --- APPEND TO SECTION ---
    section.appendChild(planetDiv);
});