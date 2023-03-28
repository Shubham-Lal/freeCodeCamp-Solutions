# Delete Many Documents with model.remove()

Model.remove() is useful to delete all the documents matching given criteria.

---

Modify the removeManyPeople function to delete all the people whose name is within the variable nameToRemove, using Model.remove(). Pass it to a query document with the name field set, and a callback.

Note: The Model.remove() doesn’t return the deleted document, but a JSON object containing the outcome of the operation, and the number of items affected. Don’t forget to pass it to the done() callback, since we use it in tests.

---

### Solution Link: [Click Here](https://boilerplate-mongomongoose.certified2003.repl.co)
