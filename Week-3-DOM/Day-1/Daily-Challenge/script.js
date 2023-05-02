const planets = ['Mercury', 'Venus', 'Earth', 'Mars',
        'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

        const colors = ['red', 'orange', 'yellow', 
        'green', 'aqua', 'indigo', 'violet', 'purple'];

        const moons=[1];

        for (let i = 0; i < planets.length; i++) {

        const newPlanets = document.createElement("div");

        newPlanets.classList.add("planet");
        
        newPlanets.style.backgroundColor = colors[i];

        document.body.appendChild(newPlanets);


        for (let i = 0; i < moons.length; i++) {

            const newPlanets = document.createElement("div");
    
            newPlanets.classList.add("moon");
    
            document.body.appendChild(newPlanets)
        }
    }
    