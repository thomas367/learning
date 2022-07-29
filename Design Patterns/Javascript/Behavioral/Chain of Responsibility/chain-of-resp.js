/**
 *
 * Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers.
 * Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.
 *
 */

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(p) {
        this.products.push(p);
    };
}

class Discount {
    calc(products) {
        let ndiscount = new NumberDiscount();
        let pdiscount = new PriceDiscount();
        let none = new NoneDiscount();
        ndiscount.setNext(pdiscount);
        pdiscount.setNext(none);

        return ndiscount.exec(products);
    };
}

class NumberDiscount {
    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    };

    exec(products) {
        let result = 0;
        if (products.length > 3) {
            result = 0.05;
        }

        return result + this.next.exec(products);
    };
}

class PriceDiscount{
    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    };

    exec(products) {
        let result = 0;
        let total = products.reduce((a, b)=> a + b);

        if (total >= 500) {
            result = 0.1;
        }

        return result + this.next.exec(products);
    };
}

class NoneDiscount {
    exec() {
        return 0;
    };
}


var cart = new ShoppingCart();
cart.addProduct(30);
cart.addProduct(130);
cart.addProduct(230);
cart.addProduct(230);

//calculate discount depends on Price, Number of products etc..
//discount request is bubling from one object to another

var discount = new Discount().calc(cart.products);

console.log(discount); //0.15000000000000002
