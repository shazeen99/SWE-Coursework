const Item = require('../src/item')
const db = require('../src/initialiseDBexport')

describe('Items', () => {
    beforeAll((done) => {
        db.run(`CREATE TABLE Items (
            Item_id INTEGER PRIMARY KEY NOT NULL, 
            Name varchar(50) NOT NULL, 
            Price varchar(10), 
            Menu_id INT NOT NULL, 
            FOREIGN KEY (Menu_id) REFERENCES Menus (Menu_id) 
          ); `, done)
    })

    test('Item data saved to DB', (done) => {
        const item1 = new Item('Soup', '2.50', 2)
        item1.save(() => {
            db.get('SELECT * FROM Items WHERE Name=?', 'Soup', (err,row) => {
                expect(row.Price).toEqual('2.50');
                expect(row.Menu_id).toEqual(2);
                done();
            })
        })
    })
})