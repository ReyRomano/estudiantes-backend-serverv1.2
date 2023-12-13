const { response } = require('express');    //Para tener el tipado en la respuesta

const Estudiante = require('../models/estudiante');

const getEstudiantes = async(req, res = response ) => {

    const estudiantes = await Estudiante.find()
                                        .populate('asignaturas', 'espanol matematicas deportes')    ////P´/Conseguir toda la info:    .populate('asignatura', '_id espanol matematicas deportes');

    res.json({
        ok: true,
        msg: 'getEstudiantes',
        estudiantes
    })
}

const getEstudiantePorId = async(req, res = response ) => {

    try {

        const id = req.params.id;
    
        // const estudiantes = await Estudiante.find();
    
        const estudiante = await Estudiante.findById(id)
                                            .populate('asignaturas', 'espanol matematicas deportes')    ////P´/Conseguir toda la info:    .populate('asignatura', '_id espanol matematicas deportes');
    
        res.json({
            ok: true,
            msg: 'getEstudiantePorId',
            estudiante
        });
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con  el administrador'  
        });
    }

}

const crearEstudiante = async(req, res = response ) => {

    const estudiante = new Estudiante( req.body );  //En req.body, viene 'nombre', 'edad' y 'estatus'

    try {   

        const estudianteDB = await estudiante.save();

    res.json({
        ok: true,
        msg: 'Creando Estudiante',
        estudiante: estudianteDB
    });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con  el administrador'  
        })
    }
}

const actualizarEstudiante = async (req, res = response ) => {

    const id = req.params.id;

    try {

        const estudiante = await Estudiante.findById( id );
        
        if ( !estudiante ) {
            
            res.status(404).json({
                ok: false,
                msg: 'Estudiante no encontrado por id',
            });
        }

        /* Para sólo actualizar nombre:
        estudiante.nombre = req.body.nombre;  */
        //Para poder actualizar varios campos:
        const cambiosEstudiante ={
            ...req.body,    //Jalando toda la información de la respuesta

        }

        const estudianteActualizado = await Estudiante.findByIdAndUpdate( id, cambiosEstudiante, { new: true } );     //id de lin. 42
        
        res.json({
            ok: true,
            msg: 'actualizarEstudiante',
            //id
            estudiante: estudianteActualizado
        })

    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


module.exports = {
    getEstudiantes,
    crearEstudiante,
    actualizarEstudiante,
    getEstudiantePorId

}