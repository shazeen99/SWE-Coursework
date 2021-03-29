const Bag = require('./bag'); 
const Passenger = require('./passenger'); 
const Plane = require('./plane'); 
const fs = require('fs')

class Airport {
    static airports = []
    constructor (destination, icao) {
        this.icao = icao
        this.name = destination
        this.planes = [] 
        this.constructor.airports.push(this)
    }

    addPlane(plane) {
        this.planes.push(plane);
    }

    getInfoCallback(callback) {
        fs.readFile('./airportsData.json', 'utf8', (err, data) => {
            //callback(err, JSON.parse(String(data)))
            console.log(data)
            const allAirports = JSON.parse(String(data));
            const airport = allAirports.find(airport => airport.icao === this.icao); 
            callback(err, airport);
        })
    }

    getInfoPromise() {
        return new Promise((resolve, reject) => {
            fs.readFile('./airports.json', (err, data) => {
                if (err) return reject(err)
                
                const airports = JSON.parse(String(data))
                const [airport] = Object.keys(airports)
                    .filter(airportCode => airports[airportCode].iata === this.name)
                    .map(airportCode => airports[airportCode])
                
                resolve(airport)
            })
        })
    }
}

module.exports = Airport
