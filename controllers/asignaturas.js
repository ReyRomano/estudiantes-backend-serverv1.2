const { response } = require('express');    //Para tener el tipado en la respuesta

const Asignatura = require('../models/asignatura');

const getAsignaturas = async(req, res = response ) => {

    //const asignaturas = await Asignatura.find();
    const asignaturas = await Asignatura.find()
                                        .populate('estudiante', 'nombre edad estatus')    //P´/Conseguir toda la info:    .populate('estudiante', '_id nombre telefono email edad estatus')

    res.json({
        ok: true,
        msg: 'Mostrando Asignaturas',
        asignaturas
    })
}

const crearAsignatura = async (req, res = response ) => {

    const asignatura = new Asignatura({
        ...req.body
    });

    try {

        const asignaturaDB = await asignatura.save();

        res.json({
            ok: true,
            msg: 'Creando Asignatura',
            asignatura: asignaturaDB
        });
        
    } catch (error) {
        console.log("Error: ", error );
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const actualizarAsignatura = async (req, res = response ) => {

    const id = req.params.id;

    try {

        const asignatura = await Asignatura.findById( id );
        
        if ( !asignatura ) {

            res.status(404).json({
                ok: false,
                msg: 'Asignatura no encontrada por id',                 
            });
            
        }

        const cambiosAsignatura = {
            ...req.body
        }

        const asignaturaActualizada = await Asignatura.findByIdAndUpdate( id, cambiosAsignatura, { new: true } );   //id de lín. 46
        
        res.json({
            ok: true,
            msg: 'actualizarAsignatura',
            asignatura: asignaturaActualizada
        })

    } catch (error) {
        console.log("error: ", error);
        res.status(500).json({
            ok:false,
            msg: "Hable con el administrador"
        })        
    }
}


module.exports = {
    getAsignaturas,
    crearAsignatura,
    actualizarAsignatura

}              