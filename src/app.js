const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const app = express();

//settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//variables
process.env.PORT = process.env.PORT || 3000;
process.env.DB = process.env.DB || 'mongodb+srv://mateo:mateo@cluster0-iweo7.mongodb.net/pinterest';


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
let storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});
app.use(multer({storage: storage}).single('image'));

//rutas
app.use(require('./routes/index.routes'));


//conexion a la base de datos
mongoose.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log(`Conexion establecida`);
});

app.listen(process.env.PORT, () => {
    console.log(`Servidorcorriendo en el puerto ${process.env.PORT}`);
});
