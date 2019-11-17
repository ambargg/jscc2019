const async = require('async')
module.exports = class CoffeeShop {
    constructor(name) {
        this.name = name,
        this.customers = []
        this.menu = []
    }

    receiveOrder(){}

    changeMilk(coffee) {
        this.menu.push(coffee)
    } 

    printCustomerName(){
        this.customers.forEach(printName)
    }
    printMenuItems(){
        this.menu.forEach(printName)
    }
}

let printName = customer => console.log(customer.name)