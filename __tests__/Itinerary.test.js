/* globals describe it expect */
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('itinerary constructor', () => {
    it('returns an object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');

        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.port).toEqual([dover, calais]);
    })
});