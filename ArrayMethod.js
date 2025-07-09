//forEach- – Loops through array (like a for loop)
arr=[1,2,3,4,5,5,89,78,4,5]
arr.forEach(num => console.log(num*num))
//map
//map- – Transforms array, returns new array

arr=[1,2,3,4,5,5,89,78,4,5]
const double=arr.map(num => num*num)
console.log(double)
//filter Keeps items that match condition
arr=[1,2,3,4,5,5,89,78,4,5]
const evens=arr.filter(num => num%2==0)
console.log(evens)
//reduce() – Combines array into single value
arr=[1,2,1,2,3,4]
const evens=arr.reduce((acc,curr)=>acc+curr,0)
console.log(evens)
//find() – Returns first match
arr=[1,2,1,2,3,4]
const evens=arr.find(num=>num%2==0)
console.log(evens)
//filter() to keep names with "i"
names=["Ritika","Riya","sona"]
contain_i=names.filter(name=>name.includes('i'))
console.log(contain_i)
//reduce() to find max
arr=[1,3,4,54,5]
max=arr.reduce((a,b)=>a>b?a:b)
console.log(max)
let arr = [1, 2, 3, 4, 5, 6];

// Add 24 to the end
arr.push(24);
console.log(arr); // [1, 2, 3, 4, 5, 6, 24]

// Remove the last element
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5, 6]

// Remove the first element
arr.shift();
console.log(arr); // [2, 3, 4, 5, 6]

// Add 90 to the beginning
arr.unshift(90);
console.log(arr); // [90, 2, 3, 4, 5, 6]

// Copy first 5 elements (non-destructive)
let x = arr.slice(0, 5);
console.log(x); // [90, 2, 3, 4, 5]

// Copy first 3 elements
let y = arr.slice(0, 3);
console.log(y); // [90, 2, 3]

// Remove 2 elements starting from index 1
arr.splice(1, 2);
console.log(arr); // [90, 4, 5, 6]
