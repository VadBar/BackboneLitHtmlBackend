const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    _id: {
        type: String,
        required: true
    },
    value: {
        type: Object,
        required: true
    }
});
module.exports = mongoose.model('advancedTableComponents', bookSchema);