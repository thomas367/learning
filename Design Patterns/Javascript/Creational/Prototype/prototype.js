/**
 * 
 * Prototype is a creational design pattern that lets you copy existing objects without 
 * making your code dependent on their classes.
 *
 */

const car = {
    noOfWheels: 4,
    start() {
        return 'started';
    },
    stop() {
        return 'stopped';
    },
};

// Object.create(proto[, propertiesObject])

const myCar = Object.create(car, { owner: { value: 'John' } });

console.log(myCar.__proto__ === car); // true
