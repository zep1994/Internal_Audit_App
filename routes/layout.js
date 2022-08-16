const express = require('express')
const router = express.Router()

const LayoutController = require('../controllers/LayoutController')
const OpsAuditController = require('../controllers/OpsAuditController')

router.get('/', LayoutController.getHeaderNames)
router.post('/', LayoutController.postHeaderNames)

router.get('/opsaudits', OpsAuditController.getOpsAudit)

//Create Audit
router.get('/add_audit', OpsAuditController.getAddAudit)
router.post('/add_audit', OpsAuditController.postAddAudit)


module.exports = router