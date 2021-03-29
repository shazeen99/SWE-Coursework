class HiringStation {
    constructor(location) {
        this.location = location
        this.scooters = []
    }

    addScooter(scooter) {
        this.scooters.push(scooter)
    }
}

module.exports = HiringStation