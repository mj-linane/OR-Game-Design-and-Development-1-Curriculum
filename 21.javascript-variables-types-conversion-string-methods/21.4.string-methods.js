/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-template */
const firstName = 'MJ'
const lastName = 'Linane'
const age = 34
const greeting = 'Hello there my name is MJ'
const tags = 'web design,web development,programming'

let val

val = firstName + lastName

// Concatenation
val = firstName + ' ' + lastName

// Append
val = 'Brad '
val += 'Traversy'

val = 'Hello, my name is ' + firstName + ' and I am ' + age

// Escaping
val = 'That\'s awesome, I can\'t wait'

// Length
val = firstName.length

// concat()
val = firstName.concat(' ', lastName)

// Change case
val = firstName.toUpperCase()
val = firstName.toLowerCase()

val = firstName[2]

// indexOf()
val = firstName.indexOf('l')
val = firstName.lastIndexOf('l')

// charAt()
val = firstName.charAt('2')
// Get last char
val = firstName.charAt(firstName.length - 1)

// substring()
val = firstName.substring(0, 4)

// slice()
val = firstName.slice(0, 4)
val = firstName.slice(-3)

// split()
val = greeting.split(' ')
val = tags.split(',')

// replace()
val = greeting.replace('Brad', 'Jack')

// includes()
val = greeting.includes('foo')

console.log(val)
