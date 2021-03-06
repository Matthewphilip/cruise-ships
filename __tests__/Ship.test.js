/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');

describe('Ship constructor', () => {
    it('returns an object', () => {
        expect(Ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        // const ship = new Ship('Dover');
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);


        // expect(ship.currentPort).toBe('Dover');
        expect(ship.currentPort).toBe(port);
    })
});

describe('set sail', () => {
    it('can set sail', () => {
        // const ship = new Ship('Dover');
        const dover = new Port('Dover');
        const calais = new Port('Calais')
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(dover);
    })
})

describe('dock', () => {
    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
        
        
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
    })

    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    })
})