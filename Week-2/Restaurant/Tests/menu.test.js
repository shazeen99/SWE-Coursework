const { TestScheduler } = require('@jest/core')
const Menu = require('../src/menu')
const db = require('../src/initialiseDBexport')

describe('Menus', () => {
    beforeAll((done) => {
        db.run(`CREATE TABLE IF NOT EXISTS Menus (
            Menu_id INTEGER PRIMARY KEY NOT NULL, 
            MenuName varchar(50) NOT NULL, 
            MenuIcon varchar(50),
            Restaurant_id INT NOT NULL,
            FOREIGN KEY (Restaurant_id) REFERENCES Restaurants (Res_id)
          );`, done)
    })

    test('Menu data saved to DB', (done) => {
        const menu1 = new Menu('Starters', '👍', 1)
        menu1.save(() => {
            db.get('SELECT * FROM Menus WHERE MenuName=?', 'Starters', (err,row) => {
                expect(row.MenuIcon).toEqual('👍');
                expect(row.Menu_id).toEqual(1);
                done();
            })
        })
    })
})