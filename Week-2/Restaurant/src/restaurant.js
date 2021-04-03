const db = require('./initialiseDBexport')
const Menu = require('./menu')

class Restaurant {
    constructor(name, imageURL, city) {
        this.name = name 
        this.imageURL = imageURL
        this.city = city
        this.menus = []
    }

    save(cb) {
        db.run("INSERT INTO Restaurants(Name, ImageURL, City) VALUES(?, ?, ?)", [this.name, this.imageURL, this.city], cb)
    }

    addmenu(title) {
        const menu = new Menu({title, icon, res_id:this.id})
        this.menus.push(menu)
    }
}

module.exports = Restaurant

