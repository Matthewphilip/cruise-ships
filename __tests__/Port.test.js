/* globals describe it expect */
const Port = require('../src/Port.js');

describe('port constructor', () => {
    it('returns an object', () => {
        expect(new Port('Dover')).toBeInstanceOf(Object);
    })
    
    it('port has a name', () => {
        const port = new Port('Dover');
        expect(port.name).toBe('Dover');
    })
})

