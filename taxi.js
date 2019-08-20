const Taxi = function(manufacturer, model, driver, capacity) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.driver = driver;
  this.capacity = capacity;
  this.passengers = []
};

Taxi.prototype.numberOfPassengers = function() {
  return this.passengers.length;
};

Taxi.prototype.addPassenger = function(passenger) {
  if (this.numberOfPassengers() < this.capacity) {
    this.passengers.push(passenger);
  };
};

Taxi.prototype.removePassenger = function(name) {
  let index;

  // index = this.passengers.indexOf();

  for (let passenger of this.passengers) {
    if (passenger.name === name){
      index = this.passengers.indexOf(passenger);
    };
  };

  // for (let i = 0; i < this.passengers.length; i++) {
  //   if (this.passengers[i] === removedPassenger) {
  //     index = i;
  //   };
  // };
  this.passengers.splice(index, 1);
};

Taxi.prototype.removeAllPassengers = function() {
  this.passengers.splice(0, this.passengers.length);
}

Taxi.prototype.childrenList = function() {
  let list = [];
  for (let passenger of this.passengers) {
    if (passenger.age < 12) {
      list.push(passenger);
    };
  };
  return list;
};

module.exports = Taxi;
