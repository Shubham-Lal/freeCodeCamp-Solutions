# Reset an Inherited Constructor Property

When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

Here's an example:

```
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, you can manually set the constructor property of Bird to the Bird object:

```
Bird.prototype.constructor = Bird;
duck.constructor
```
