const mongoose = require('mongoose');

const connectDatabase = () => {
    const uri = process.env.MONGO_URI;

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`MongoDB Connected => Host: ${data.connection.host}\n`);
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = connectDatabase;