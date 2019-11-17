// 2 classes & 3 interactions

const Customer = require('./customer')
const CoffeeShop = require('./coffeeshop')
const Coffee = require('./coffee')
const Async = require('async')
const Database = require('./database')

const simon = new Customer('Simon')
const gabrielle = new Customer('Gabi')
let barn = new CoffeeShop('The Barn')

let capuccino = new Coffee ('Capuccino')
let flatwhite = new Coffee ('Flat White')
let latte = new Coffee ('Latte')
let cortado = new Coffee ('Cortado')

simon.visit(barn)
simon.makeOrder(capuccino)
gabrielle.visit(barn)

barn.printCustomerName()
barn.changeMilk(capuccino)
barn.changeMilk(flatwhite)
barn.changeMilk(latte)
barn.changeMilk(cortado)

barn.printMenuItems()

Database.save('coffeeshop.json', barn)
Database.save('customer.json', simon)
Database.save('coffee.json', flatwhite)

const loadedFile = Database.load('coffeeshop.json')
console.log(loadedFile.name)

// const Database = require('./database)
// console.log(Database.load('coffeeshop.json').name)
// console.log(loadedFile.name)