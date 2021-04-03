const { TestScheduler } = require('@jest/core')
const Restaurant = require('../src/restaurant')
const db = require('../src/initialiseDBexport')

describe('Restaurants', () => {
    beforeAll((done) => {
        db.run(`CREATE TABLE IF NOT EXISTS Restaurants (
            Res_id INTEGER PRIMARY KEY NOT NULL,
            Name varchar(50) NOT NULL, 
            ImageURL varchar(300), 
            City varchar(50)
          );`, done)
    })

    test('Restaurant data saved to DB', (done) => {
        const restaurant1 = new Restaurant('KFC', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png', 'London')
        restaurant1.save(() => {
            db.get('SELECT * FROM Restaurants WHERE Name=?', 'KFC', (err,row) => {
                console.log(err)
                expect(row.ImageURL).toEqual('https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png');
                expect(row.Res_id).toEqual(1);
                done();
            })
        })
    })

    test('Restaurant has menus', (done) => )
})

