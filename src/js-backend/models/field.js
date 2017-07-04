const mongoose = require('mongoose');

const fieldSchema = mongoose.Schema({

    id_str: String,
    content: String

});

module.exports = mongoose.model('Field', fieldSchema)
