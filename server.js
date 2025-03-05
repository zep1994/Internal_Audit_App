const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const multer  = require('multer');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public/')));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// ROUTES
const HomeRoutes = require('./routes/home');
const LayoutRoutes = require('./routes/layout');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `uploads/${file.originalname}`);
  }
});

const upload = multer({ storage: multerStorage });

app.use(HomeRoutes);
app.use(LayoutRoutes);

// OPTIONAL: File upload route – ensure you have a File model or remove this route until implemented.
app.post('/public/uploads', upload.single('file'), async (req, res, next) => {
  try {
    // If you have a File model, use it here.
    res.status(200).json({ message: "File upload route working (model not implemented yet)" });
  } catch (error) {
    res.json({ error });
  }
});

// Fix: Use req.params.filename for sending file
app.get('/uploads/:filename', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'uploads', req.params.filename));
});

// LISTEN
mongoose.connect(
    'mongodb+srv://thomasmatlockbba:OhEtx295sBmNxrpp@cluster0.0oi0b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)
.then(() => {
    app.listen(3000);
    console.log("Connected to the new MongoDB cluster");
})
.catch(err => {
    console.error("MongoDB connection error:", err);
});
