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
//Arrow Function
const greet=(name)=>`hello,${name}`
console.log(greet('cutie'))

const add=(a,b)=>a+b
console.log(add(8,7))
const sub=(a,b)=>a-b
console.log(sub(8,89))
const pow=(x,y)=>x**y
console.log(pow(2,5))

const factorial=(num)=>{
    let fact=1;
    while(num>0){
        fact=fact*num;
        num=num-1;
    }
    return fact;
};
console.log(factorial(5))
const double=n=>n*n
console.log(double(5))
//Callback Function
const func=(a,b,operation)=>
{
   return operation(a,b) 
};
const add=(a,b)=>a+b;
console.log(func(8,123,add))
const repeat=(task,times)=>{
    for(let i=0;i<times;i++){
       task(); 
    }
   
};
repeat(()=> console.log("Doing task ...."),3)
