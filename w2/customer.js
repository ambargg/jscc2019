const Async = require('async')
module.exports = class Customer {
    constructor(name) {
        this.name = name
        this.order = []
    }

    visit(coffeeShop) {
        this.coffeeShop = coffeeShop.name
        coffeeShop.customers.push(this)
    }

    makeOrder(coffee){
    //    this.coffeeShop.receiveOrder(coffee)
        this.order.push(coffee)
    }
}