
/*Create a program that loops through numbers 1–20 and prints:

“Fizz” if divisible by 3

“Buzz” if divisible by 5

“FizzBuzz” if divisible by both*/
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
