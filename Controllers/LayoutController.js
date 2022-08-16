const { ObjectID } = require('bson')
const Layout = require('../models/Layout')


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

exports.postHeaderNames = (req, res, next) => {
    const header_names = req.body.header_names
    console.log(header_names)
    const layout = new Layout({
        header_names: header_names
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