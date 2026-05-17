class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name + " barks");
  }
}

let d = new Dog("Rex");
d.speak();
d.bark();



class Vehicle {
  constructor(type) {
    this.type = type;
    console.log("Vehicle: " + type);
  }
}

class Car extends Vehicle {
  constructor(brand) {
    super("Car");
    this.brand = brand;
    console.log("Brand: " + brand);
  }
}

let c = new Car("Tesla");


class Shape {
  area() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super();
    this.w = w;
    this.h = h;
  }

  area() {
    return this.w * this.h;
  }
}

let r = new Rectangle(5, 3);
console.log("Area:", r.area());


class Base {
  greet() {
    return "Hello";
  }
}

class Child extends Base {
  greet() {
    return super.greet() + " World";
  }
}

console.log(new Child().greet());



class Vehicle2 {}
class Car2 extends Vehicle2 {}
class Tesla extends Car2 {}

let t = new Tesla();

console.log(t instanceof Tesla);
console.log(t instanceof Car2);
console.log(t instanceof Vehicle2);
console.log(t instanceof Object);