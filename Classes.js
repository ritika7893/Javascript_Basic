class Vehicle{
    constructor(name)
    {
        this.name=name
    }
    speak() {
    console.log(`${this.name} makes hiii a sound`);
  }
}
class Car extends Vehicle{
    constructor(name)
    {
        super(name);
    }
    speak() {
    console.log(`${this.name} makes a sound`);
  }
}
const v=new Car("Thar")
v.speak()
