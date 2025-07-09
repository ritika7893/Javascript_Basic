try {
  let a = 10;
  let b = a + c; // 'c' is not defined — causes ReferenceError
} catch (err) {
  console.log("Error caught:", err.message);
}


  console.log("hi");
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (e) {
  console.log("Caught:", e.message);
}
