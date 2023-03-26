# Create and Save a Record of a Model

In this challenge you will have to create and save a record of a model.

---

Within the createAndSavePerson function, create a document instance using the Person model constructor you built before. Pass to the constructor an object having the fields name, age, and favoriteFoods. Their types must conform to the ones in the personSchema. Then, call the method document.save() on the returned document instance. Pass to it a callback using the Node convention. This is a common pattern; all the following CRUD methods take a callback function like this as the last argument.

```
/* Example */

// ...
person.save(function(err, data) {
  //   ...do your stuff here...
});
```

---

### Solution Link: [Click Here](https://boilerplate-mongomongoose.certified2003.repl.co)
