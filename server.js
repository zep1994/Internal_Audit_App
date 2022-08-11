const path = require('path')
const fs = require('fs')

const express = require('express')
const bodyParser = require('body-parser')
const { Dropzone } = require('dropzone')
const multer  = require('multer')
// const multer = multer({ dest: '/public/uploads' })

//Create instance of express
const app = express()
const mongoConnect = require('./utils/mongodb')
const mongoose = require('mongoose');

const port = process.env.PORT || 3000 // Port 3000


app.set('view engine', 'ejs')
app.set('views', 'views')


// Use Static Files to serve images and css
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public/')))
app.use('/uploads', express.static(path.join(__dirname, '/public/uploads')))


//ROUTES
//const HomeRoutes = require('./routes/home')
const LayoutRoutes = require('./routes/layout')

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public");
        },
        filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `uploads/${file.originalname}`);
        },
    });

const upload = multer({
    storage: multerStorage
})


// RENDER ROUTES
//app.use(HomeRoutes)
app.use(LayoutRoutes)

app.post('/public/uploads', upload.single('file'), async (req, res, next) => {
    try {
        const newFile = await File.create({
            name: req.file.filename
        })
        res.status(200).json({
            message: "Success"
        })
    } catch(error) {
        res.json({error})
    }
   
})

app.get('/uploads/:filename',(req,res) => {
    res.sendFile(__dirname,"/public/uploads/"+req.query.filename);
})

// mongoConnect(client => {
//     console.log(client)
//     app.listen(3000)
// })

// LISTEN
mongoose.connect(
    'mongodb+srv://tmatlock94:BSY500a!@internalaudit.vmbsfxd.mongodb.net/?retryWrites=true&w=majority'
    )
.then(res => {
    app.listen(3000)
    console.log("Connected")
})
.catch(err => {
    console.log(err)
})

// var newPath = __dirname + "/uploads/"
//         fs.writeFile(newPath, data, function(err) {
//             console.log("Fininshed" + err)
//         })