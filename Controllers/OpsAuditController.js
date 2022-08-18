const Audit = require('../models/audit')
const Layout = require('../models/Layout')

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
    const audit = new Audit({
        audit: audit_name,
        layoutId: null
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
exports.getAudit = (req, res, next) => {
    const Id = req.params.auditId
    Audit.findById(Id)
        .then(audit => {
            const items = Audit.find()
            console.log(items)
            res.render('opsaudit/show', {
                audit: audit,
                items: items,
                path: '/opsaudit'
            })
        })
}