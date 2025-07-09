// Create a student object
let student = {
    name: 'Riya',
    age: 17,
    marks: 78
}

// Destructure name and marks from the object
const { name, marks } = student
console.log(name)     // Output: Riya
console.log(marks)    // Output: 78

// Add a new property to the object
student.city = 'Dehradun'

// Loop through all properties of the object
for (let i in student) {
    console.log(student[i])
}

// Array of user objects
const users = [
    { name: "Ritika", role: "admin" },
    { name: "Ankit", role: "user" },
    { name: "Neha", role: "admin" }
]

// Filter only admin users
const admins = users.filter(user => user.role === "admin")
console.log(admins)

// Create a calculator object with methods
let calc={
    add:(a,b)=>a+b,
    sub:(a,b)=>a-b
}
console.log(calc.add(5,7))
console.log(calc.sub(5,7))
