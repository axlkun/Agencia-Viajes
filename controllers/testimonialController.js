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

    console.log(errores);
}

export {
    guardarTestimonial
}