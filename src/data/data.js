const data = {
    "projects": [
        {
            "index": 0,
            "title": "The Shoppies",
            "description":
            "A movie/tv show nomination app built with React.js frontend and a Node.js/Express backend using MongoDB to store data.",
            "pictures": {
                "picture1": process.env.PUBLIC_URL + "./images/shoppies1.jpg",
                "picture2": process.env.PUBLIC_URL + "./images/shoppies2.jpg",
                "picture3": process.env.PUBLIC_URL + "./images/shoppies3.jpg",
                "picture4": process.env.PUBLIC_URL + "./images/shoppies4.jpg"
            },
            "githubLink": "https://github.com/08fdange/the_shoppies"

        },
        {   
            "index": 1,
            "title": "PiratePort",
            "description": 
            "An online garage sale developed with React/Redux frontend and a Rails API backend. Users can list their items for sale, browse through available items for sale with filtering and contact sellers directly via their contact information.",
            "pictures": {
                "picture1": process.env.PUBLIC_URL + "./images/pirateport1.jpg",
                "picture2": process.env.PUBLIC_URL + "./images/pirateport2.jpg",
                "picture3": process.env.PUBLIC_URL + "./images/pirateport3.jpg",
                "picture4": process.env.PUBLIC_URL + "./images/pirateport4.jpg"
            },
            "githubLink": "https://github.com/08fdange/pirateport"
            
        },
        {
            "index": 2,
            "title": "BurgerBites",
            "description": 
            "A Single Page Application designed with HTML, CSS and vanilla JavaScript with a Rails API backend where users can search for and rate their favorite burger joints. Implements Yelp Search API to populate the page with different restaurants based on location query.",
            "pictures": {
                "picture1": process.env.PUBLIC_URL + "./images/burgerbites0.jpg",
                "picture2": process.env.PUBLIC_URL + "./images/burgerbites1.jpg",
                "picture3": process.env.PUBLIC_URL + "./images/burgerbites2.jpg"
            },
            "githubLink": "https://github.com/08fdange/burgerbites"
        },
        {
            "index": 3,
            "title": "HomeInspex",
            "description":
            "A Ruby on Rails application that clients can use to schedule home inspections and inspectors can track the progress of their currently scheduled home inspections.",
            "pictures": {
                "picture1": process.env.PUBLIC_URL + "./images/HomeInspex1.jpg",
                "picture2": process.env.PUBLIC_URL + "./images/HomeInspex2.jpg",
                "picture3": process.env.PUBLIC_URL + "./images/HomeInspex3.jpg",
        
            },
            "githubLink": "https://github.com/08fdange/homeinspex"
        },
        {
            "index": 4,
            "title": "CovidTracker",
            "description":
            "A Covid-19 Tracker that shows global infected, recovered and deaths stats, a line chart of daily global infected and deaths stats and current infected, recovered and deaths stats by each country. Hosted (link next to Github symbol).",
            "pictures": {
                "picture1": process.env.PUBLIC_URL + "./images/covid_tracker.jpg",
                "picture2": process.env.PUBLIC_URL + "./images/covid_tracker2.jpg"
            },
            "githubLink": "https://github.com/08fdange/covidtracker",
            "hostedLink": "https://covidtracker.08fdange.vercel.app/"
        },
        {
            "index": 5,
            "title": "Simple Calculator",
            "description":
            "A simple calculator built using functional components in React. It's just like the one you might have on your phone. Hosted (link next to Github symbol).",
            "pictures": {
                "picture1": process.env.PUBLIC_URL + "./images/simple_calculator.jpg"
                
            },
            "githubLink": "https://github.com/08fdange/simple-calculator",
            "hostedLink": "https://simple-calculator-nu.vercel.app/"
        }   
    ]
}

export default data;