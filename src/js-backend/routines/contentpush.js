var Field = require('../models/field')

module.exports = (req, res, next) => {

    var id_str = req.query.id_str
    var content = req.query.content
    Field.findOneAndUpdate(
        {id_str: id_str},
        {$set:{content: content}},
        function(err, doc) {
            var success = err ? false : true
            res.send(JSON.stringify({success}))
    });
}
