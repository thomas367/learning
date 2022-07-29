/**
 *
 * Facade is a structural design pattern that provides a simplified interface to a library,
 * a framework, or any other complex set of classes.
 *
 */

class ShopFacade {
    constructor() {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }

    calc(price) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();

        return price;
    }
}

class Discount {
    calc(value) {
        return value * 0.9;
    }
}

class Shipping {
    calc() {
        return 5;
    }
}

class Fees {
    calc(value) {
        return value * 1.05;
    }
}
