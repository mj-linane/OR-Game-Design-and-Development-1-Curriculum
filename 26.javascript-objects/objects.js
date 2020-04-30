// JavaScript Objects

const student = {
  // KEY - VALUE PAIRS
  // KEY --- VALUE
  name: 'MJ',
  age: '24',
  height: "6'",
  weight: 175,
  hobbies: ["coding", "video games"],
  education: { 'secondary': 'old rochester', 'college': 'harvard' },
  walking: function () {
    console.log("I am walking")
  }


  // walking() {
  //   console.log("I am walking")
  // }

}

// Accessing Properties With Dot Notation
// console.log(student.name)
// console.log(student.age)
// console.log(student.weight)
// console.log(student.hobbies)
// console.log(student.hobbies[0])
// console.log(student.education.secondary)

// Assign to variable
// let highschool = student.education.secondary
// console.log(highschool)

// Accessing Properties With Brackets
// console.log(student['age'])

// Assign a new VALUE to a property
// student.age = 25
// console.log(student.age)

// Creating New Properties
// student.job = 'cashier'
// console.log(student.job)

// Deleting A Property
// delete student.job
// console.log(student.job)

// Get all keys using Object.keys
// console.log(Object.keys(student))

// Get all keys using for-in loop
// for (const property in student){
//   console.log(property)
// }

// console.log(student.walking())

// CREATE OBJECT USING FUNCTIONS
function Person(age, name, job, weight, picture) {
  this.age = age,
    this.name = name,
    this.job = job,
    this.weight = weight
  this.picture = picture
  this.greeting = function () {
    alert('Hello! I am ' + this.name)
  }
}

const john = new Person(30, 'john', 'teacher', 200, 'fileLocation')

const mary = new Person(16, 'mary', 'unemployed', 110, 'fileLocation')


console.log(john.greeting())

