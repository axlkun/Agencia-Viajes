import express from 'express';

const router = express.Router();

router.get('/', (req,res) => {
    res.send('Inicio');
});

router.get('/nosotros', (req,res) => {

    const viajes = 'Viaje a Alemania';

    res.render('nosotros',{
        textoViajes: viajes
    });
});

export default router;