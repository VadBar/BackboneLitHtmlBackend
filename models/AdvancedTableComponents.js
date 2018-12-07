const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    value: {
        type: Object,
        required: true
    },
    _id: {
        type: String,
        required: false
    }
});
module.exports = mongoose.model('advancedTableComponents', bookSchema);