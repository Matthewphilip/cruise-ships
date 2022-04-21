/* globals describe it expect */
const Ship = require('../src/Ship.js');

describe('Ship constructor', () => {
    it('returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a current port', () => {
        const ship = new Ship('Dover');
        expect(ship.currentPort).toBe('Dover');
    })
});

describe('set sail', () => {
    it('can set sail', () => {
        const ship = new Ship('Dover');

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    })
})