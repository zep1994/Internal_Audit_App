const path = require('path')

const express = require('express')
const { Dropzone } = require('dropzone')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

//Create instance of express
const app = express()
const port = process.env.PORT || 3000 // Port 3000


app.set('view engine', 'ejs')
app.set('views', 'views')

//ROUTES
const HomeRoutes = require('./routes/home')

// Use Static Files to serve images and css
app.use(express.static(path.join(__dirname, 'public')))


// RENDER ROUTES
app.use(HomeRoutes)

app.post('/upload', upload.single('file'), (req, res, next) => {
    console.log(req.file)
    return res.status(200).send(req.file);
})


// LISTEN
app.listen(port, () => {
    console.log('Connected')
})