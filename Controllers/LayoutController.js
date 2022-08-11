const Layout = require('../models/Layout')

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

exports.postHeaderNumber = (req, res, next) => {
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