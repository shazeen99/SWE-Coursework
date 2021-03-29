class Plane {
    constructor (name) {
        this.name = name
        this.passengers = []
    }

    boardPassenger(passenger) {
        this.passengers.push(passenger);
    }
}

module.exports = Plane