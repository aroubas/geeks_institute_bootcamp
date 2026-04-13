
[2] === [2] 
{} === {}
// both are false bcs we compared the addresses here not the value while objects and array are non primitive data type these are compared by refrence.

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)
// since all objects are reference types, object1, object2, and object3 are all just different names for the exact same memory address.so this is why it prints the same value


class Animal{
  constructor(name,type,color){
    this.name = name ;
    this.type = type;
    this.color = color;
  }
};

class Mammal extends Animal{
  constructor(name,size,type,){
    super(name,size,type) ;
  }
  sound(noise){
    return `${this.name} is a ${this.color} ${this.type} and it goes: ${noise}`;
  }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");