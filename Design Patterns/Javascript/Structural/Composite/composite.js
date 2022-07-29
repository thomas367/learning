/**
 *
 * Composite pattern
 * This is a structural design pattern that composes objects into tree-like structures to represent whole-part hierarchies.
 * In this pattern, each node in the tree-like structure can be either an individual object
 * or a composed collection of objects. Regardless, each node is treated uniformly.
 *
 */

//Equipment
class Equipment {

    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}

// --- composite ---
class Composite extends Equipment {

    constructor() {
        super();
        this.equipments = [];
    }

    add(equipment) {
        this.equipments.push(equipment);
    }

    getPrice() {
        return this.equipments.map(equipment => {
            return equipment.getPrice();
        }).reduce((a, b)  => {
            return  a + b;
        });
    }
}

class Cabbinet extends Composite {
    constructor() {
        super();
        this.setName('cabbinet');
    }
}

// --- leafs ---
class FloppyDisk extends Equipment {
    constructor() {
        super();
        this.setName('Floppy Disk');
        this.price = 70;
    }
}

class HardDrive extends Equipment {
    constructor() {
        super();
        this.setName('Hard Drive');
        this.price = 250;
    }
}

class Memory extends Equipment {
    constructor() {
        super();
        this.setName('Memory');
        this.price = 280;
    }
}
