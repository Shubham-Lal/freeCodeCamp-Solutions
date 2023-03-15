// Fix the code so duck.constructor and beagle.constructor return their respective constructors.

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Bird.prototype.constructor = Bird;

Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor);
console.log(beagle.constructor);