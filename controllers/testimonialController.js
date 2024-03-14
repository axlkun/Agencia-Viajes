const guardarTestimonial = (req, res) => {

    const { nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({
            mensaje: 'Ingresar un nombre'
        });
    }

    if(correo.trim() === ''){
        errores.push({
            mensaje: 'Ingresar un correo'
        });
    }

    if(mensaje.trim() === ''){
        errores.push({
            mensaje: 'Ingresar un mensaje'
        });
    }

    if(errores.length > 0){
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje
        })
    }else{
        // Guardar informacion
    }
}

export {
    guardarTestimonial
}