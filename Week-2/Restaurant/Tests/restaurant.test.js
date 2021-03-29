const Restaurant = require('../restaurant')
const Menu = require('../menu')
const Item = require('../item')
const { TestScheduler } = require('@jest/core')

describe ('restaurant ordering app tests', () => {
    test('add a restaurant', () => {
        const KFC = new Restaurant ('KFC', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png', 'London');
        expect(KFC.city).toEqual('London')  
    })

    test('add a menu', () => {
        const menu1 = new Menu ('menu1', ':)')
        expect(menu1.icon).toEqual(':)')
    })

    test('add an item', () => {
        const soup = new Item ('Soup', '£3.00')
        expect(soup.price).toEqual('£3.00')
        expect(soup.name).toEqual('Soup')
    })

    test('add several menus to a restaurant', () => {
        const KFC = new Restaurant ('KFC', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png', 'London');
        KFC.addmenu('menu1')
        KFC.addmenu('menu2')
        expect(KFC.menus).toEqual(['menu1', 'menu2'])
    })

    test('add an item to a menu',() => {
        const menu1 = new Menu('starters', ':)')
        const item1 = new Item('Soup', '£3.00')
        menu1.addItem('Soup')
        expect(menu1.items).toEqual(['Soup'])

    })
})
