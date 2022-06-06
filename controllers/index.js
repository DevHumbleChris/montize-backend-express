const Try = require('../models/Try')
const Category = require('../models/Category')

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
    },

    // Category Controllers

    // Get All Categories.
    getAllCategories: async (req, res) => {
        try {
            const results = await Category.find({})

            res.json({
                categories: results
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    },

    // Create Category.
    createCategory: async (req, res) => {
        try {
            // Check if Category Exists
            const dataExists = await Category.findOne({ name: req.body.name })
    
            if (dataExists) return res.json({
                message: `Category '${dataExists.name}' Exists`
            })
    
            const newCategory = new Category({
                name: req.body.name,
                icon: req.body.icon,
                color: req.body.color
            })
    
            await newCategory.save((err, results) => {
                if (err) return res.status(400).json({
                    message: err.message
                })
    
                res.json({
                    category: results
                })
            })
        } catch (err) {
            res.status(400).json({
                message: err.message + 'Here'
            })
        }
    },

    // Update Category.
    updateCategory: async (req, res) => {
        await Category.findOneAndUpdate({ _id: req.query._id }, {
            $set: {
                name: req.body.name,
                icon: req.body.icon,
                color: req.body.color
            },
        },
        (err, results) => {
            if (err) return res.status(400).json({
                message: err.message
            })

            res.json({
                message: `Category '${results.name}' Updated Successfully!`
            })
        }
        )
    },

    // Delete Category
    deleteCategory: async (req, res) => {
        try {
            await Category.findByIdAndRemove({ _id: req.query._id }, (err, results) => {
                if (err) return res.status(400).json({
                    message: err.message
                })

                if (results) return res.status(200).json({
                    message: `Category '${results._id}' Deleted Successfully!`,
                    results,
                })
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    }
}