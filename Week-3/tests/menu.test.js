const {sequelize} = require('../src/sequelize_index');
const {Menu} = require('../src/menu');
const { TestScheduler } = require('@jest/core');
const {Item} = require('../src/item');

describe('Menu', () => {
    beforeAll(async() => {
        await sequelize.sync({force: true});
    })

    test('can create a Menu', async () => {
    await sequelize.sync({force:true})
    const menu1 = await Menu.create({name:'Starters', price: '👍', res_id: '1'})
    expect(menu1.id).toBe(1)
    })

    test('menus have an item', async () => {
        const menu1 = await Menu.create({title:'Starters', icon: '👍', res_id: '1'})
        const item1 = await Item.create({name:'soup', price: '£2.50', menu_id: '1'})
        await menu1.addItem(item1);
        const items = await menu1.getItems();
        expect(items.length).toBe(1);
        expect(items[0].price).toBe('£2.50') 
    })

    test('menus have >1 items', async () => {
        const menu1 = await Menu.create({title:'Starters', icon: '👍', res_id: '1'})
        const item1 = await Item.create({name:'Soup', price: '£2.50', menu_id: menu1.id})
        const item2 = await Item.create({name:'Wings', price: '£5', menu_id: menu1.id})
        //await menu1.addItem(item1);
        //await menu1.addItem(item2);
        const items = await menu1.getItems();
        expect(items.length).toBe(2);
        expect(items[0].name).toBe('Soup') 
    })

    test('item gets added to relevant menu', async () => {
        const menu1 = await Menu.create({title:'Starters', icon: '👍', res_id: '1'})
        const item1 = await Item.create({name:'Soup', price: '£2.50', menu_id: '1'})
        const item2 = await Item.create({name:'Wings', price: '£5', menu_id: '1'})
        await menu1.addItem(item1);
        await menu1.addItem(item2);
        const items = await menu1.getItems();
        expect(items.length).toBe(2);
        expect(items[1].name).toBe('Wings') 
    })
})


