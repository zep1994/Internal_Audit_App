const Audit = require('../models/audit')
const Layout = require('../models/Layout')
const Steps = require('../models/audit_steps')

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
            const layoutID = audit.layoutId
            Layout.findById(layoutID)
                .then(items => {
                    if (items == null) {
                        res.render('opsaudit/show', {
                            items: 0,
                            audit: audit,
                            steps: 0,
                            path: '/opsaudit'
                        })
                    } else {
                        Steps.find()
                            .then(steps => {
                                steps.audit_id === Id
                                console.log(steps)
                                res.render('opsaudit/show', {
                                    audit: audit,
                                    steps: steps,
                                    items: items.header_names,
                                    path: '/opsaudit'
                                })
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    }
                })
                .catch(err => {
                    console.log(err)
                })           
        })
}


