const mongoose = require('mongoose')

module.exports = mongoose.connect(
    'mongodb://localhost:27017/dbAgenda',
    { useNewUrlParser: true },
    err => {
        if (err) throw err;
        console.log(`Successfully connected to database.`);
    }
);