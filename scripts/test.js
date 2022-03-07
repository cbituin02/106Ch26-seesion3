function Dog(name, age) {
    this.name = name;
    this.age = age;
}

class Cat {
//  automatically called when creating objects
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

function objects() {

// object literal
let d1 = {
    name: "Fido",
    age: 3
    }
let d2 = {
    name: "Bork",
    age: 10
    }

console.log(d1,d2);

// object constructor
let d3 = new Dog("Dude", 2);
let d4 = new Dog("Huh", 3);
console.log(d3,d4)

}

// classes
let c1 = new Cat ("Kittie", 3, "black");
let c2 = new Cat ("Mew", 5, "orange")
console.log(c1,c2);
objects();