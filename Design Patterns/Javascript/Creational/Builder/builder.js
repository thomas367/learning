/**
 *
 * Builder is a creational design pattern that lets you construct complex objects step by step.
 * The pattern allows you to produce different types and representations of an object using the same construction code.
 *
 */

class ProductBuilder {
    constructor() {
        this.name = 'A Product';
        this.price = 9.99;
        this.category = 'other';
    }

    withName(name) {
        this.name = name;
        return this;
    }

    withPrice(price) {
        this.price = price;
        return this;
    }

    withCategory(category) {
        this.category = category;
        return this;
    }

    build() {
        return {
            name: this.name,
            price: this.price,
            category: this.category,
        }
    }
}

const obj1 = new ProductBuilder().withName('Harry Potter').withCategory('book').build();
const obj2 = new ProductBuilder().withName('Lord of the Rings').withCategory('movie').build();

console.log(obj1);
// =>
//    {
//      name: 'Harry Potter',
//      price: 9.99,
//      category: 'book'
//    }

console.log(obj2);
// =>
//    {
//      name: 'Harry Potter',
//      price: 9.99,
//      category: 'book'
//    }
