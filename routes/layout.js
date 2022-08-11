const express = require('express')
const router = express.Router()

const LayoutController = require('../controllers/LayoutController')

router.get('/', LayoutController.getHeaderNames)
router.post('/', LayoutController.postHeaderNames)

module.exports = router