const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect(
        'mongodb://localhost:27017/basic_auth', 
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then((_) => console.log("Successfully connected to the database...."))
    .catch((_) => console.log("There is some error while connecting to the database....."));
}