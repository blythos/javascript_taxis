const assert = require('assert');
const Taxi = require('../taxi.js');
const Passenger = require('../passenger.js');

describe('Taxi', function() {
  let taxi;
  let passenger1;
  let passenger2;

  beforeEach(function() {
    taxi = new Taxi('Toyota', 'Prius', 'Martin', 4);
    passenger1 = new Passenger('Billy', 11);
    passenger2 = new Passenger('Stephen', 35);
  });

  it('should have a manufacturer', function() {
    const actual = taxi.manufacturer;
    assert.strictEqual(actual, 'Toyota')
  });

  it('should have a model', function() {
    const actual = taxi.model;
    assert.strictEqual(actual, 'Prius')
  });

  it('should have a driver', function() {
    const actual = taxi.driver;
    assert.strictEqual(actual, 'Martin')
  });

    describe('passengers', function() {
      it('should start off with no passengers', function() {
        const actual = taxi.passengers;
        assert.deepStrictEqual(actual, []);
      });

      it('should return the number of passengers', function() {
        const actual = taxi.numberOfPassengers();
        assert.strictEqual(actual, 0);
      });

      it('should allow you to add a passenger', function() {
        taxi.addPassenger(passenger1);
        const actual = taxi.numberOfPassengers();
        assert.strictEqual(actual, 1);
      });

      it('should allow you to remove a passenger by name', function() {
        taxi.addPassenger(passenger1);
        taxi.addPassenger(passenger2);
        taxi.removePassenger('Stephen');
        const actual = taxi.passengers;
        assert.deepStrictEqual(actual, [passenger1]);
      });

      it('should remove all passengers', function() {
        taxi.addPassenger(passenger1);
        taxi.addPassenger(passenger2);
        taxi.removeAllPassengers();
        const actual = taxi.numberOfPassengers();
        assert.strictEqual(actual, 0);
      });

      it('should list all passengers under age of 12', function() {
        taxi.addPassenger(passenger1);
        taxi.addPassenger(passenger2);
        const actual = taxi.childrenList();
        assert.deepStrictEqual(actual, [passenger1]);
      });

      it('reaches passenger capacity', function() {
        taxi.addPassenger(passenger1);
        taxi.addPassenger(passenger2);
        taxi.addPassenger(passenger1);
        taxi.addPassenger(passenger2);
        taxi.addPassenger(passenger1);
        taxi.addPassenger(passenger2);
        const actual = taxi.numberOfPassengers();
        assert.strictEqual(actual, 4)
      });

    });
});
