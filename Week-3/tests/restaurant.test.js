const {sequelize} = require('../src/sequelize_index');
const {Restaurant} = require('../src/restaurant');
const { TestScheduler } = require('@jest/core');
const {Menu} = require('../src/menu');

describe('Restaurant', () => {
    beforeAll(async() => {
        await sequelize.sync({force: true});
    })

    test('can create a restaurant', async () => {
    await sequelize.sync({force:true})
    const restaurant = await Restaurant.create({name:'KFC', imageURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png', city: 'London'})
    expect(restaurant.id).toBe(1)
    })

    test('restaurants have menus', async () => {
        const restaurant1 = await Restaurant.create({name:'KFC', imageURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png', city: 'London'})
        const menu1 = await Menu.create({title:'Starters', icon: '👍', res_id: '1'})
        await restaurant1.addMenu(menu1);
        const menus = await restaurant1.getMenus();
        expect(menus.length).toBe(1);
        expect(menus[0].title).toBe('Starters') 
    })
})


