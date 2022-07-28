/**
 *
 * Singleton is a creational design pattern where only one instance of a class can exist.
 * If no instance of the singleton class exists then a new instance is created and returned
 * but if an instance already exists then the reference to the existing instance is returned.
 *
 */

// The following piece of code is a JavaScript developer's daily usage of the Singleton.
const singelton = {
    publicVariable: 'Public Variable',
    publicMethod : function () {
        console.log('Public Method');
    }
};

class Singleton {
    constructor() {
        this.publicVariable = 'Public Variable';

        if(! Singleton.instance){
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    publicMethod() {
        console.log('Public Method');
    }
}

const instance = new Singleton();

// prevents new properties from being added to the object
Object.freeze(instance);


const singleA = new Singleton();
const singleB = new Singleton();
console.log( singleA === singleB); // true
