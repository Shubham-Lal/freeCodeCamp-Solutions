# Install and Set Up Mongoose

mongoose@^5.11.15 has been added to your project’s package.json file. First, require mongoose as mongoose in myApp.js. Next, create a .env file and add a MONGO_URI variable to it. Its value should be your MongoDB Atlas database URI. Be sure to surround the URI with single or double quotes, and remember that you can't use spaces around the = in environment variables. For example, MONGO_URI='VALUE'.

Note: If you are using Replit, you cannot create a .env file. Instead, use the built-in SECRETS tab to add the variable. Do not surround the values with quotes when using the SECRETS tab.

When you are done, connect to the database by calling the connect method within your myApp.js file by using the following syntax:

`mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });`

---

### Solution Link: [Click Here](https://boilerplate-mongomongoose.certified2003.repl.co)

### Follow this tutorial on YT by [Ganesh H](https://www.youtube.com/watch?v=nBZYUjyO9hY)

### Create your own free Cluster: [Click Here](https://www.youtube.com/watch?v=jXgJyuBeb_o)
