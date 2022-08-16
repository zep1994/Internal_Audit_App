const Audit = require('../models/audit')

exports.getOpsAudit = (req, res, next) => {
    Audit.find()
    .then(audits => {
        console.log(audits)
        res.render('opsaudit/index', {
            path: '/opsaudits',
            audits: audits
        })
    })
}

exports.getAddAudit = (req, res, next) => {
    return res.render('opsaudit/create', {
        path: '/add_audit',
    })
}

exports.postAddAudit = (req, res, next) => {
    const audit_name = req.body.audit 
    console.log(audit_name)
    const audit = new Audit({
        audit: audit_name
    })
    audit
        .save()
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}


// SHOW
