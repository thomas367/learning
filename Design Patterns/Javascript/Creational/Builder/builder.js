/**
 *
 * Bulider pattern - are used to separate the complexities of the creation logic from the final representation.
 *
 */

class ProductBuilder {
    constructor() {
        this.name = 'A Product'
        this.price = 9.99
        this.category = 'other'
    }

    withName(name) {
        this.name = name
        return this
    }

    withPrice(price) {
        this.price = price
        return this
    }

    withCategory(category) {
        this.category = category
        return this
    }

    build() {
        return {
            name: this.name,
            price: this.price,
            category: this.category,
        }
    }
}

console.log(
    new ProductBuilder()
        .withName('Harry Potter')
        .withCategory('book')
        .build()
);

// =>
//    {
//      name: 'Harry Potter',
//      price: 9.99,
//      category: 'book'
//    }
