//forEach
arr=[1,2,3,4,5,5,89,78,4,5]
arr.forEach(num => console.log(num*num))
//map
//map
arr=[1,2,3,4,5,5,89,78,4,5]
const double=arr.map(num => num*num)
console.log(double)
//filter
arr=[1,2,3,4,5,5,89,78,4,5]
const evens=arr.filter(num => num%2==0)
console.log(evens)
