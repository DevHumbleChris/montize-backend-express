const mongoose = require('mongoose')

const newCategory = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    color: {
        type: String,
        default: '#003d5b'
    },
    monthlyBudget: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Category', newCategory)