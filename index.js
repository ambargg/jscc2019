// 2 classes & 3 interactions



client = class {
    constructor(name) {
        this.name = name
        this.order = []
    }

    visit(coffeeShop) {
        this.coffeeShop = coffeeShop
        coffeeShop.visitors.push(this)
    }

    makeOrder(coffee){
        this.order.push(coffee)
    }

  
}

coffeeShop = class {
    constructor(name) {
        this.name = name,
        this.visitors = []
        this.menu = []
        this.review = []
    }

    changeMilk(coffee) {
        this.menu.push(coffee)
    } 

    printVisitorsName(){
        this.visitors.forEach(printName)
    }
    printMenuItems(){
        this.menu.forEach(printName)
    }

}

coffee = class {
    constructor(name){
        this.name = name
    }
}

printName = coffee => console.log(coffee.name)


simon = new client('Simon')

barn = new coffeeShop('The Barn')

capuccino = new coffee ('Capuccino')
flatwhite = new coffee ('Flat White')
latte = new coffee ('Latte')
cortado = new coffee ('Cortado')

// these are not functions?
barn.changeMilk(capuccino)
barn.changeMilk(flatwhite)
barn.changeMilk(latte)
barn.changeMilk(cortado)

simon.visit(barn)
simon.makeOrder(capuccino)
simon.changeMilk(capuccino)

