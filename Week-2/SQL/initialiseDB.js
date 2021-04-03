const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../restaurants.sqlite');

let sqlCreateRestaurantTable = `CREATE TABLE Restaurants (
    Res_id INTEGER PRIMARY KEY NOT NULL,
    RestaurantName varchar(50) NOT NULL, 
    ImageURL varchar(300), 
    City varchar(50)
  );`

let sqlCreateMenuTable = `CREATE TABLE Menus (
    Menu_id INTEGER PRIMARY KEY NOT NULL, 
    MenuName varchar(50) NOT NULL, 
    MenuIcon varchar(50),
    Restaurant_id INT NOT NULL,
    FOREIGN KEY (Restaurant_id) REFERENCES Restaurants (Res_id)
  );`

// let sqlUpdateMenuTable = `INSERT INTO Menus (MenuName, MenuIcon, Restaurant_id)
// VALUES ('Starters', '👍', 1), 
// ('Drinks', '😎', 3), 
// ('Main', '😇', 1);`

let sqlCreateMenuItemTable = `CREATE TABLE MenuItems (
    Item_id INTEGER PRIMARY KEY NOT NULL, 
    ItemName varchar(50) NOT NULL, 
    Price decimal(5,2), 
    Menu_id INT NOT NULL, 
    FOREIGN KEY (Menu_id) REFERENCES Menus (Menu_id) 
  ); `

// let sqlUpdateMenuItemTable = `INSERT INTO MenuItems (ItemName, Price, Menu_id)
// VALUES ('Soup', 2.500, 1), 
// ('Fanta', 1, 2), 
// ('Pizza', 10.00, 3),
// ('Burger', 8.00, 3);`

try {
    db.serialize(() => {
        db.run('DROP TABLE IF EXISTS Restaurants')
        db.run('DROP TABLE IF EXISTS Menus')
        db.run('DROP TABLE IF EXISTS MenuItems')
        db.run(sqlCreateRestaurantTable);
        db.run(sqlCreateMenuTable);
        db.run(sqlCreateMenuItemTable);

        db.each("SELECT * FROM MenuItems",
            function (err, rows) { 
                console.log(rows);  
            });
        })

    } finally {
        db.close();
    }
