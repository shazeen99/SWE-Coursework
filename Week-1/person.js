


const princeHarry = {
    name: 'Prince Harry',
    parent: ['Diana', 'Charles'],
    childOf: function() {
    return this.parent.map(parent => parent).join(' & ') || "parents unknown"
    }
}
const Diana = {
    name: 'Diana',
    parent: ['Mr Diana', 'Mrs Diana'],
    childOf: function() {
    return this.parent.map(parent => parent).join(' & ') || "parents unknown"
    }
}

const Charles = {
    name: 'Charles',
    parent: ['The Queen', 'Prince Philip'],
    childOf: function() {
    return this.parent.map(parent => parent).join(' & ') || "parents unknown"
    }
}


module.exports = princeHarry, Diana, Charles 
