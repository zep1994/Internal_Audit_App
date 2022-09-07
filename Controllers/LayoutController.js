const { ObjectID } = require('bson')
const Audit = require('../models/audit')
const Layout = require('../models/Layout')
const Step = require('../models/audit_steps')


exports.getHeaderNames = (req, res, next) => {
    const id = ObjectID('62f550a5dfe58b22a82f85b8')
    Layout.findById(id)
        .then(items => {
            console.log(items.header_names)
            res.render('index.ejs', {
                items: items.header_names,
                path: '/opsaudits'
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    // .then(layout => {
    //     console.log(layout)
    //     res.render('index', {
    //         items: layout,
    //         path: '/'
    //     })
    // })
    // .catch(err => {
    //     console.log(err)
    // })


exports.postAddLayout = (req, res, next) => {
    const headers = req.body.headers
    const names = req.body.names
    const steps = req.body.steps 
    const step_names = req.body.step_names
    const layout = new Layout({
        headers: headers,
        names: names,
        steps: steps,
        step_names: step_names
    })
    layout
        .save()
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}

exports.postLayout = (req, res, next) => {
    const header_names = req.body.header_names
    const field_name = req.body.field_name
    const Id = req.params.auditId
    console.log(field_name)
    const step = new Step({
        audit_id: Id,
        header: header_names,
        name: field_name
    })
    const layout = new Layout({
        //header_names: header_names,
        headers: {
            header: "Header",
            field: "Field"
        },
        auditId: Id,
        //audit_steps: step.audit_id
    })
    Audit.findById(Id)
        .then(audit => {
            audit.layoutId = layout._id 
            return audit.save()
        })
        .catch(err => {
            console.log(err)
        })
    layout
        .save()
        .then(() => {
            step
                .save()
                .then(() => {
                    res.redirect('/')
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
        })
    
}

//EDIT HEADERS
exports.editHeaderNames = (req, res, next) => {

}
