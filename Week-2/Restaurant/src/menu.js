const db = require('../src/initialiseDBexport')
const Item = require('./item')

class Menu {
    constructor (title, icon, res_id) {
        this.title = title
        this.icon = icon
        this.res_id = res_id
        this.items = []
    }

    addItem(name) {
        const item = new Item({name, price, menu_id})
        this.items.push(item)
    }

    save(cb) {
        db.run("INSERT INTO Menus (MenuName, MenuIcon, Restaurant_id) VALUES (?, ?, ?)", [this.title, this.icon, this.res_id], cb)
    }


}

module.exports = Menu
