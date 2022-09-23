const Audit = require('../models/audit')
const Layout = require('../models/Layout')
const AuditStep = require('../models/audit_steps')
const WorkStep = require('../models/work_steps')

exports.getOpsAudit = (req, res, next) => {
    Audit.find()
    .then(audits => {
        //console.log(audits)
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
            const workStepId = audit.workStepId
            WorkStep.findById(workStepId)
                .then(workstep => {
                    if (workstep == null) {
                        res.render('opsaudit/show', {
                            items: 0,
                            audit: audit,
                            steps: 0,
                            path: '/opsaudit'
                        })
                    } else {
                        const auditStepId = workstep.steps
                        AuditStep.findById(auditStepId)
                        .then(auditstep => {  
                            if (auditstep == null) {
                            res.render('opsaudit/show', {
                                audit: audit,
                                steps: 0,
                                path: '/opsaudit'
                            })
                        } else {
                            res.render('opsaudit/show', {
                                audit: audit,
                                items: workstep.name,
                                steps: steps
                            })
                        }})
                        .catch(err => {
                            console.log(err)
                        })
                    }


                    // } else {
                    //     Steps.find()
                    //         .then(steps => {
                    //             steps.audit_id === Id
                    //             console.log(steps)
                    //             res.render('opsaudit/show', {
                    //                 audit: audit,
                    //                 steps: steps,
                    //                 items: items.header_names,
                    //                 path: '/opsaudit'
                    //             })
                    //         })
                    //         .catch(err => {
                    //             console.log(err)
                    //         })
                    // }
                })
                .catch(err => {
                    console.log(err)
                })           
        })
}


exports.postAddSteps = (req, res, next) => {
    const Id = req.params.auditId
    const steps = req.body.steps
    console.log(steps)

    Audit.findById(Id)
        .then(audit => {
            const workStepId = audit.workStepId
            const auditStep = new AuditStep({
                workStep_id: workStepId,
                steps: steps
            })
            WorkStep.findById(workStepId)
                .then(step => {
                    console.log(step)
                    step.steps = auditStep._id
                    return step.save()
                })
                .catch(err => {
                    console.log(err)
                })
            auditStep
            .save()
            .then(() => {
                res.redirect('/')
            })
            .catch(err => {
                console.log(err)
            })
        })
}