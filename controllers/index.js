const Try = require('../models/Try')

module.exports = {
    index: async (req, res) => {
        const newTry = new Try({
            name: 'Johnson'
        })

        await newTry.save((err, results) => {
            if (err) return res.json({
                error: err.message
            })
            
            res.json({
                results,
            })
        })
    }
}