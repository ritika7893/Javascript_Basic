let x=90
{
    let x=9
    console.log(x)//block level scope this x is diiferennt from the global x
}
 console.log(x)
let x = 10  // Global variable

function show() {
    let y = 90  // Local variable
    return x + y  // uses global x and local y
}
res = show()
console.log(res)  // 100

let x = 90  // Re-declaring global x (this can cause error in strict mode)

{
    let x = 9  // Block scoped x, different from above x
    console.log(x)  // 9
}
console.log(x)  // 90

function outer() {
    let name = "Diya"  // Variable in outer scope
    function inner() {
        console.log(name)  // Inner function remembers outer variable
    }
    inner()
}
outer()  // Prints Diya

function counter() {
    count = 0  // No let or const, becomes global
    return function inner() {
        count++  // Remembers count from outer function
        console.log(count)
    }
}

const inc = counter()  // Returns the inner function
inc()  // 1
inc()  // 2

