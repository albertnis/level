const mongoose = require('mongoose');

module.exports = (db) => {
    return mongoose.connect(db, (error) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Connected to database');
        }
    });
}
