/**
 *
 * Flyweight pattern - The Flyweight pattern is a classical structural solution for optimizing code
 * that is repetitive, slow, and inefficiently shares data. It aims to minimize the use of memory
 * in an application.  - see memoization & cacheing
 *
 */

class Color {
    constructor(name){
        this.name = name;
    }
}

class colorFactory {
    constructor(name){
        this.colors = {};
    }
    create(name) {
        let color = this.colors[name];
        if(color) 
            return color;
        this.colors[name] = new Color(name);
        return this.colors[name];
    }
};
