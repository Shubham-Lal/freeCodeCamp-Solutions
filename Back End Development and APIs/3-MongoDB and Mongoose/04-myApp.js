require('dotenv').config();

// ----------------CHALLENGE 1----------------
// Install and Set Up Mongoose
// First Sign-in or register to MongoDB
// And then follow this tutorial on how to create free cluster - https://www.youtube.com/watch?v=jXgJyuBeb_o
const mySecret = process.env['MONGO_URI'];
mongoose.connect(mySecret, { useNewUrlParser: true, useUnifiedTopology: true });

// ----------------CHALLENGE 2----------------
// Create a Model
const Schema = mongoose.Schema;
const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String]
});
const Person = mongoose.model("Person", personSchema);

// ----------------CHALLENGE 3----------------
// Create and Save a Record of a Model
const createAndSavePerson = (done) => {
    let myName = new Person({
        name: "Shubham Lal",
        age: 19,
        favoriteFoods: ["food1", "food2"]
    });

    myName.save((err, data) => {
        if (err) return console.error(err);
        done(null, data)
    });
};

// ----------------CHALLENGE 4----------------
// Create Many Records with model.create()
/* What arrayOfPeople can hold
const arrayOfPeople = [
  { name: "Shubham", age: 19, favoriteFoods: ["Food 1"] },
  { name: "Aniket", age: 18, favoriteFoods: ["Food 2"] },
  { name: "Pratik", age: 21, favoriteFoods: ["Food 3"] }
];
*/
const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, people) => {
        if (err) return console.log(err);
        done(null, people);
    });
};

const findPeopleByName = (personName, done) => {
    done(null /*, data*/);
};

const findOneByFood = (food, done) => {
    done(null /*, data*/);
};

const findPersonById = (personId, done) => {
    done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";

    done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;

    done(null /*, data*/);
};

const removeById = (personId, done) => {
    done(null /*, data*/);
};

const removeManyPeople = (done) => {
    const nameToRemove = "Mary";

    done(null /*, data*/);
};

const queryChain = (done) => {
    const foodToSearch = "burrito";

    done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
