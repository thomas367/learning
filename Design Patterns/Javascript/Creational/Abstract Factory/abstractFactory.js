/**
 *
 * Abstract Factory is a creational design pattern that lets you produce families
 * of related objects without specifying their concrete classes.
 *
 */

function droidProducer(kind) {
    if (kind === 'battle') {
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory() {
    return new B1();
}

function pilotDroidFactory() {
    return new Rx24();
}


class B1 {
    info() {
        return "B1, Battle Droid";
    }
}

class Rx24 {
    info() {
        return "Rx24, Pilot Droid";
    }
}

const battleDroid = droidProducer('battle');
const pilotDroid = droidProducer('pilot');
