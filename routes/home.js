const express = require('express')
const router = express.Router()

const HomeController = require('../Controllers/HomeController')

//Index Page
router.get('/', HomeController.getIndex)

module.exports = router
