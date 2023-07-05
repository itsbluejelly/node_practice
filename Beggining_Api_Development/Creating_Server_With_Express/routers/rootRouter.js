const express = require('express')
const rootController = require('../controllers/rootController')

const rootRouter = express.Router()

rootRouter.get('/', rootController.postController)

module.exports = {
    rootRouter
}