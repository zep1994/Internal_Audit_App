const express = require('express')
const router = express.Router()

const LayoutController = require('../controllers/LayoutController')

router.post('/', LayoutController.postHeaderNumber)

module.exports = router