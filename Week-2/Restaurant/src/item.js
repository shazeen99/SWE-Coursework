const db = require('../src/initialiseDBexport')

class Item {
    constructor (name, price, menu_id) {
        this.name = name 
        this.price = price
        this.menu_id = menu_id
    }

    save(cb) {
        db.run("INSERT INTO Items (Name, Price, Menu_id) VALUES (?, ?, ?)", [this.name, this.price, this.menu_id], cb)
    }
}

module.exports = Item