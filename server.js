const path = require('path')

const express = require('express')
const { Dropzone } = require('dropzone')

//Create instance of express
const app = express()
const port = process.env.PORT || 3000 // Port 3000


app.set('view engine', 'ejs')
app.set('views', 'views')

// Use Static Files to serve images and css
app.use(express.static(path.join(__dirname, 'public')))

//Home Route
app.get('/', (req, res, next) => {
    let myDropzone = new Dropzone("#my-form");
    myDropzone.on("addedfile", file => {
    console.log(`File added: ${file.name}`);
    });
})

// LISTEN
app.listen(port, () => {
    console.log('Connected')
})