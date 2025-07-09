// Task 1: Counter Object using Closure
function createCounter() {
    let count = 0
    return {
        increment: function () {
            count++
        },
        getcount: function () {
            console.log(count)
        }
    }
}
const counter = createCounter()
counter.increment()
counter.increment()
counter.getcount()

// Task 2: Greeting Generator using Higher-Order Function
const greetGenerator = name => console.log(`Hello, ${name}`)
greetGenerator("Riya")

// Task 3: Multiplier Factory using Closure
const makeMultiplier = n => (x => x * n)
const double = makeMultiplier(2)
console.log(double(5))
