const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../restaurants.sqlite');
const fsp = require('fs').promises;

async function load() {
    console.log('calling load');
    const buffer = await fsp.readFile('../restaurants.json');
    const restaurants = (JSON.parse(String(buffer)));
    return restaurants;
}


// let sqlUpdateRestaurantTable = `INSERT INTO Restaurants (RestaurantName, ImageURL, City)
// VALUES ('KFC', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png', 'London'),
// ('Mcdonalds', 'http://www.moreaboutadvertising.com/wp-content/uploads/2016/05/mcd-logo.jpg', 'Birmingham'),
// ('Amigos','https://pbs.twimg.com/profile_images/1678307566/AmigosR_Logo_web.jpg', 'London' );`

