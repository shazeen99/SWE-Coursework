class Scooters {
    constructor(model) {
        this.model = model
        chargeLevel = 0
    }

    async charge() {
        console.log('Starting charge'); 

        await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

        console.log('Charge complete');   // after 2 seconds this line will print
    }

    hireScooter() {
        if (this.chargeLevel === 100) {
            console.log ('Scooter ready to hire')
        } else {
            console.log ('Not fully charged'); 
            this.charge()
        }
    }
}

module.exports = Scooters 