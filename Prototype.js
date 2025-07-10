let animal = {
    eats: true
};

let dog = Object.create(animal); // dog inherits from animal
dog.barks = true; // add own property

console.log(dog.eats); // true (inherited from animal)
console.log(dog.barks); // true (own property)
console.log(dog.__proto__ === animal); // true (prototype is animal)

let g = {
    sleep: true
};

console.log(g.eats); // undefined (g does not inherit from animal)
console.log(g.sleep); // true (own property)

function Person(name) {
    this.name = name; // set name property
}

Person.prototype.sayhi = function () {
    console.log(`Hi, I'm ${this.name}`); // method on prototype
};

let p = new Person("riyuu"); // create new Person instance
p.sayhi(); // call prototype method
