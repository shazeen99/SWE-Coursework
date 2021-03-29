const {Charles, Diana, princeHarry } = require('./person'); 

describe('Charles objects', () => {
    test('have a name', () => {
        expect(Charles.name).toEqual("Charles")
    })
})

describe('Charles objects', () => {
    test('have a name', () => {
        expect(Diana.name).toEqual("Diana")
    })
})

describe('Charles objects', () => {
    test('have a name', () => {
        expect(princeHarry.name).toEqual("Prince Harry")
    })
})