/**
 * 
 * Singleton is a creational design pattern that lets you ensure that a class has only 
 * one instance, while providing a global access point to this instance.
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

        if(!Singleton.instance){
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
