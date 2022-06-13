const path = require('path')


const express = require('express')

//Create instance of express
const app = express()
const port = process.env.PORT || 3000 // Port 3000

// Use Static Files to serve images and css
app.use(express.static(path.join(__dirname, 'public')));

//Home Route
app.get('/', (req, res, next) => {
    res.send("hello World")
})

// LISTEN
app.listen(port, () => {
    console.log('Connected')
})