const assert = require('assert');
const Passenger = require('../passenger.js');

describe('Passenger', function() {
  let passenger1;
  let passenger2;

  beforeEach(function() {
    passenger1 = new Passenger('Billy', 21);
    passenger2 = new Passenger('Stephen', 35);
  });

  it('should have a name', function() {
    const actual = passenger1.name;
    assert.strictEqual(actual, 'Billy');
  });

});
