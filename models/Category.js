const mongoose = require('mongoose')

const newCategory = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: 'fas fa-acorn'
    },
    color: {
        type: String,
        default: 'blue'
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Category', newCategory)