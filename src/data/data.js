const data = {
    "projects": [
        {
            "index": 0,
            "title": "The Shoppies",
            "description":
            "A movie/tv show nomination app built with React.js frontend and a Node.js/Express backend using MongoDB to store data.",
            "pictures": {
                "picture1": process.env.PUBLIC_URL + "./images/shoppies1.png",
                "picture2": process.env.PUBLIC_URL + "./images/shoppies2.png",
                "picture3": process.env.PUBLIC_URL + "./images/shoppies3.png",
                "picture4": process.env.PUBLIC_URL + "./images/shoppies4.png"
            }

        },
        {   
            "index": 1,
            "title": "PiratePort",
            "description": 
            "An online garage sale developed with React/Redux frontend and a Rails API backend. Users can list their items for sale, browse through available items for sale with filtering and contact sellers directly via their contact information.",
            "pictures": {
                "picture1": process.env.PUBLIC_URL + "./images/pirateport1.png",
                "picture2": process.env.PUBLIC_URL + "./images/pirateport2.png",
                "picture3": process.env.PUBLIC_URL + "./images/pirateport3.png",
                "picture4": process.env.PUBLIC_URL + "./images/pirateport4.png"
            },
            "githubLink": "https://github.com/08fdange/pirateport"
            
        },
        {
            "index": 2,
            "title": "BurgerBites",
            "description": 
            "A Single Page Application designed with HTML, CSS and vanilla JavaScript with a Rails API backend where users can search for and rate their favorite burger joints. Implements Yelp Search API to populate the page with different restaurants based on location query.",
            "pictures": {
                "picture1": process.env.PUBLIC_URL + "./images/burgerbites0.png"
            },
            "githubLink": "https://github.com/08fdange/burgerbites"
        },
        {
            "index": 2,
            "title": "HomeInspex",
            "description":
            "A Ruby on Rails application that clients can use to schedule home inspections and inspectors can track the progress of their currently scheduled home inspections.",
            "pictures": {
                "picture1": process.env.PUBLIC_URL + "./images/HomeInspex1.png",
                "picture2": "https://res.cloudinary.com/dbtndpluf/image/upload/v1606969674/Project%20Pictures/HomeInspex3_rojtdp.png",
                "picture3": "https://res.cloudinary.com/dbtndpluf/image/upload/v1606969675/Project%20Pictures/HomeInspex1_cfostq.png",
                "picture4": "https://res.cloudinary.com/dbtndpluf/image/upload/v1606969674/Project%20Pictures/HomeInspex4_cz1eyz.png"
        
            },
            "githubLink": "https://github.com/08fdange/homeinspex"
        },
        {
            "index": 4,
            "title": "CovidTracker",
            "description":
            "A Covid-19 Tracker that shows global infected, recovered and deaths stats, a line chart of daily global infected and deaths stats and current infected, recovered and deaths stats by each country (chosen by a Country drop down bar)",
            "pictures": {
                "picture1": "" 
            }
        }    ]
}

export default data;