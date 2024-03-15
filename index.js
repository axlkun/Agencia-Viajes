import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
import db from './config/db.js';

dotenv.config()

const app = express();

// conectar bdd
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

const port = process.env.PORT || 4000

// habilitar pug
app.set('view engine', 'pug');

// obtener año actual
app.use( (req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';

    return next();
});

// agregar body parser para leer los datos del form
app.use(express.urlencoded({extended: true}));

// definir carpeta publica
app.use(express.static('public'));

// agregar router
app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});