import express from 'express';
import router from './routes/index.js';

const app = express();

const port = process.env.PORT || 4000

// habilitar pug
app.set('view engine', 'pug');

// definir carpeta publica
app.use(express.static('public'));

// agregar router
app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});