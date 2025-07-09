function greet(){
    name="Priya"
    return `hello, ${name}`
}
function fibonacci(n){
    let a=0;
    let b=1;
    console.log("Fibonacci Series:",a,b)
    for(let i=3;i<=n;i++){
        c=a+b
        a=b
        b=c
      
       console.log(c) 
    }
}
console.log(greet())
console.log(fibonacci(10))
