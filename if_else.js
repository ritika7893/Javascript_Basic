let ch;
do{
console.log("Enter the choice: Yes Or No")
ch=prompt("Enter the Choice: ")
if(ch.toLowerCase()!='no')
{
   let a=prompt("Enter the max")

if (a>70)
console.log("A")
else if (a>60)
console.log("B")
else if (a>50)
console.log("C")
else
console.log("D")
}


}while(ch.toLowerCase()!='no');
/*🔹 1. Variables
Keyword	Scope	Reassignment	Redeclaration
var	Function	✅	✅
let	Block	✅	❌
const	Block	❌	❌

Use let and const only (modern JS).

🔹 2. Data Types
Primitive Types (copied by value):
String – "Hello"

Number – 10, 3.14

Boolean – true, false

null – empty value

undefined – variable declared, not assigned

Symbol – unique value (advanced)*/
