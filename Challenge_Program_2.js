//map
const users=[
    {name:"Ritika",age:12, role: "admin"},
    {name:"Ritu",age:70, role: "admin"},
    {name:"Rit",age:10, role: "user"}
    ]
//Task 1: Filter users who are admins
const admin_users=users.filter(user=>user.role=="admin")
console.log(admin_users)
//Task 2: Convert all city names to lowercase
const cities = ["DELHI", "MUMBAI", "PUNE"];
const lw_cities=cities.map(city=>city.toLowerCase())
console.log(lw_cities)
//Task 3: Find total salary of all employees
const employees = [
  { name: "Amit", salary: 40000 },
  { name: "Riya", salary: 35000 },
  { name: "Karan", salary: 45000 },
];
const total=employees.reduce((acc,curr)=>acc+curr.salary,0)
console.log(total)
//🔸 Task 4: Find the first even number in the array
const numbers = [7, 13, 9, 12, 5, 8];
let x=numbers.find(num=> num%2==0)
console.log(x)
const students = ["Ritika", "Ankit", "Neha"];
students.forEach(s=>console.log(`greet,${s}`))
