class Menu {
    constructor (title, icon) {
        this.title = title
        this.icon = icon
        this.items = []
    }

    addItem(item) {
        this.items.push(item)
    }
}

module.exports = Menu
