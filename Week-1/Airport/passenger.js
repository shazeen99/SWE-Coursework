const Bag = require('./bag.js');

class Person {
    constructor (name) {
        this.name = name
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}

class Passenger extends Person{
    callAttendant() {
        console.log('Excuse me, I need help')
    }
}

class Crew extends Person{
    
}


// const bob = new Passenger('Bob the Builder')
// const bobsCabinBag = new Bag(9)
// const bobsHullBag = new Bag(23)
// bob.addBag(bobsCabinBag)
// bob.addBag(bobsHullBag)
// console.log(bob.bags)

module.exports = Passenger

Passenger.callAttendant
