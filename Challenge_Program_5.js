// Capitalize first letter
let a = "hello world";
let first = a.charAt(0);
a = first.toUpperCase() + a.slice(1);
console.log("Capitalized:", a);  // "Hello world"

// Count vowels
let count = 0;
for (let s of a.toLowerCase()) {
  if (['a', 'e', 'i', 'o', 'u'].includes(s)) {
    count++;
  }
}
console.log("Vowel Count:", count);

// Reverse a string
let str = "hyhu";
let rev = str.split('').reverse().join('');
console.log("Reversed:", rev);  // "uhyh"

// Extract domain from email
let input = "user@gmail.com";
let domain = input.slice(input.indexOf('@') + 1);
console.log("Domain:", domain);  // "gmail.com"

// Convert to kebab-case
let new_s = "Hello World From JS";
let kebab = new_s.toLowerCase().split(' ').join('-');
console.log("Kebab Case:", kebab);  // "hello-world-from-js"
