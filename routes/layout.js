const express = require('express')
const router = express.Router()

const LayoutController = require('../controllers/LayoutController')
const OpsAuditController = require('../controllers/OpsAuditController')
const AuditStepsController = require('../controllers/AuditStepsController')

router.get('/', LayoutController.getHeaderNames)
// router.post('/', LayoutController.postHeaderNames)

router.get('/opsaudits', OpsAuditController.getOpsAudit)

//Show Audit
router.get('/opsaudits/:auditId', OpsAuditController.getAudit)
//Post Audit
router.post('/opsaudits/:auditId', LayoutController.postWorkStep)
router.post('/opsaudits/edit/:auditId', LayoutController.editHeaderNames)

//Create Audit
router.get('/add_audit', OpsAuditController.getAddAudit)
router.post('/add_audit', OpsAuditController.postAddAudit)


//STEPS
router.post('/opsaudit/steps/:auditId', OpsAuditController.postAddSteps)



router.post('/audit_steps', AuditStepsController.postAuditSteps)


module.exports = router