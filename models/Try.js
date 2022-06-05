const mongoose = require('mongoose')

const trySchema = new mongoose.Schema({
    name: {
        type: String
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Try', trySchema)