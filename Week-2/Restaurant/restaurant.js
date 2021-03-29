class Restaurant {
    constructor(name, imageURL, city) {
        this.name = name 
        this.imageURL = imageURL
        this.city = city
        this.menus = []
    }

    addmenu(menu) {
        this.menus.push(menu)
    }
}


module.exports = Restaurant