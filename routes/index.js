const router = require('express').Router()
const controllers = require('../controllers')

router.get('/', controllers.index)

// Category Routes.
router.get('/categories', controllers.getAllCategories)
router.post('/category/create', controllers.createCategory)
router.put('/category/:_id/update', controllers.updateCategory)
router.delete('/category/:_id/delete', controllers.deleteCategory)

module.exports = router