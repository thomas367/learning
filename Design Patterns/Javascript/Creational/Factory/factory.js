/**
 * 
 * Factory Method is a creational design pattern that provides an interface for creating
 * objects in a superclass, but allows subclasses to alter the type of objects that will be created.
 *
 */

class BmwFactory {
    create(type) {
        if (type === 'X5') {
            return new Bmw(type, 108000, 300); //factory method define what to run before return
        }
        if (type === 'X6') {
            return new Bmw(type, 111000, 320);  //factory method define what to run before return
        }
    }
}

class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

const factory = new BmwFactory();

const bmwX5 = factory.create('X5');
const bmwX6 = factory.create('X6');

console.log(bmwX6.model); //X6
console.log(bmwX5.model); //X5
