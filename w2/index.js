const Person = require('./person') 
const Meetup = require('./meetup')
const Chalk = require('chalk')
const Database = require('./database')

  printName = person => console.log(person.name)

const mert = new Person('Mert', 34)
const armagan = new Person('Armagan', 35)

console.log(Chalk.blue.bgRed.bold('Hello World'))
printName = person => console.log(Chalk.bgGreen(person.name))

mert.greet(armagan)

const wtmb = new Meetup('WTM Berlin')
armagan.attend(wtmb)
mert.attend(wtmb)

wtmb.printAttendeeNames()

Database.save('meetup.json', wtmb)
Database.save('person.json', mert)

const loadedFile = Database.load('meetup.json')
console.log(loadedFile.name)