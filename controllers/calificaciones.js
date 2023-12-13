const { response } = require('express');    //Para tener el tipado en la respuesta

const Calificacion = require('../models/calificacion');
const Estudiante = require('../models/estudiante')

const getCalificaciones = async(req, res = response ) => {

    //const calificaciones = await Calificacion.find();
    const calificaciones = await Calificacion.find()
                                            .populate('id_estudiante', 'nombre edad estatus')    //P´/Conseguir toda la info:    .populate('id_estudiante', '_id nombre edad estatus,')

    res.json({
        ok: true,
        msg: 'Mostrando Calificaciones',
        calificaciones
    })
}

const crearCalificacion = async (req, res = response ) => {

    const calificacion = new Calificacion({
        ...req.body
    });

    try {

        const calificacionDB = await calificacion.save();

        res.json({
            ok: true,
            msg: 'Creando Calificacion',
            calificacion: calificacionDB
        })
        
    } catch (error) {
        console.log("Error: ", error );
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


module.exports = {
    getCalificaciones,
    crearCalificacion

}              