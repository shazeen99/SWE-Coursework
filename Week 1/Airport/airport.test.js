
const Bag = require('./bag'); 
const Passenger = require('./passenger'); 
const Plane = require('./plane'); 
const Airport = require('./airport'); 


describe('Airport details test', () => {
    test('add a name to airport', () => {
        const LHR = new Airport('LHR');
        expect(LHR.name).toEqual('LHR');
    });

    test('is an instance of a Passenger', () => {
        const betty = new Passenger('Betty')
        expect(betty instanceof Passenger).toBeTruthy()
    });

    // test('an airport has planes', () => {
    //     // given
    //     const LHR = new Airport('LHR');
    //     const plane1 = new Plane('plane1');
    //     LHR.addPlane('plane1');
    //     expect(LHR.planes).toEqual('plane1');
    // })
})

// describe('plane to passenger', () => {
//     test('add passenger to plane', () => {
//         const plane1= new Plane('jet1')
//         const passenger1 = new Passenger ('Shazeen')
//         plane1.boardPassenger(passenger1)
//         expect(plane1.passengers).toEqual('Shazeen');
//     })
// })

// const plane1= new Plane('jet1')
// const passenger1 = new Passenger ('Shazeen')
// plane1.boardPassenger(passenger1)
//const LHR = new Airport('LHR');
//const STN = new Airport('STN');
//console.log(Airport.airports)
// console.log(plane1.passengers)


