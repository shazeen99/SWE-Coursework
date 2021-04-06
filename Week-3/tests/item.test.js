const {sequelize} = require('../src/sequelize_index');
const {Item} = require('../src/item');
const { TestScheduler } = require('@jest/core');

describe('Item', () => {
    beforeAll(async() => {
        await sequelize.sync({force: true});
    })

    test('can create an item', async () => {
    await sequelize.sync({force:true})
    const item1 = await Item.create({name:'soup', price: '£2.50', menu_id: '1'})
    expect(item1.id).toBe(1)
    })
})




