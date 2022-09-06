const Audit = require('../models/audit')
const Layout = require('../models/Layout')
const Steps = require('../models/audit_steps')

exports.postAuditSteps = (req, res, next) => {
    const audit_id = req.body.mySteps.audit_id
    const header = req.body.mySteps.header
    const name = req.body.mySteps.name
    const steps = new Steps({
        audit_id: audit_id,
        header: header,
        name: name
    })
    steps
        .save()
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}