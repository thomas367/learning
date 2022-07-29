/**
 * 
 * Flyweight is a structural design pattern that lets you fit more objects into the available amount
 * of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.
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
        if(color) {
            return color;
        }

        this.colors[name] = new Color(name);
        return this.colors[name];
    }
};
