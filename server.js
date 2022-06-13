const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res, next) => {
    res.send("hello World")
})

app.listen(port, () => {
    console.log('Connected')
})