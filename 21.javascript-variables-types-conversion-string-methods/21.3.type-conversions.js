// TYPE CONVERSIONS

let result

// NUMBER TO STRING/TEXT
let number = 555
// console.log(typeof number)
result = String(555)

// Boolean to string
result = String(true)

// Math to string
result = String(4 + 4)

// STRING TO NUMBER
result = Number('5')
result = Number(true)
result = Number(false)
result = Number('hello') // NaN = Not a Number

result = parseInt('100.30')
result = parseFloat('100.30')


// Why Convert -- User input is string type, need to convert to do math
result = 5 + 5
result = "5" + 5

console.log(typeof result, result)