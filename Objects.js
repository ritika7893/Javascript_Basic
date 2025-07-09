const user={
    name: "Priya",
    age: 18,
    is_drive:true,
    fun:function(){
        console.log("hello")
    },
    address: {
    city: "Dehradun",
    pin: 248001
  }
}
console.log(user.name)
console.log(user["age"])
console.log(user.address.pin)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

// Object Destructuring:Extract values from an object into variables easily.
const user = {
  name: "Riya",
  age: 21,
  city: "Dehradun"
};
const { name, age}=user
console.log(name)
console.log(age)
const { city:hometown}=user
console.log(hometown)
