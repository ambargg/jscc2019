// 2 classes & 3 interactions

class Customer {
    constructor(name) {
        this.name = name
        this.order = []
    }

    visit(coffeeShop) {
        this.coffeeShop = coffeeShop
        coffeeShop.customers.push(this)
    }

    makeOrder(coffee){
    //    this.coffeeShop.receiveOrder(coffee)
        this.order.push(coffee)
    }
}

class CoffeeShop {
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

class Coffee {
    constructor(name){
        this.name = name
    }
}

let printName = x => console.log(x.name)


let simon = new Customer('Simon')

printName(simon)

let barn = new CoffeeShop('The Barn')

let capuccino = new Coffee ('Capuccino')
let flatwhite = new Coffee ('Flat White')
let latte = new Coffee ('Latte')
let cortado = new Coffee ('Cortado')

simon.visit(barn)
simon.makeOrder(capuccino)

barn.changeMilk(capuccino)
barn.changeMilk(flatwhite)
barn.changeMilk(latte)
barn.changeMilk(cortado)

barn.printMenuItems()