//getTodo

const { response } = require('express');

const Estudiante = require('../models/estudiante');
const Asignatura = require('../models/asignatura');

const getTodo = async(req, res = response ) => {

    // const estudiantes = await Estudiante.find();

    /*  const estudiantes = await Estudiante.find()
                                        .populate('asignaturas', 'espanol matematicas deportes')    ////P´/Conseguir toda la info:    .populate('asignatura', '_id espanol matematicas deportes');
    */

    const busqueda = req.params.busqueda;   //Consigue el valor q le busque en Postman
    //Ó:    const busqueda = req.params.busqueda || '';

    //Busqueda x ID
    const estudiantes = await Estudiante.find({ "_id": busqueda })
                                        .populate('asignaturas', 'espanol matematicas deportes');

    //const asignaturas = await Asignatura.find({ "_id": busqueda });
    const asignaturas = await Asignatura.find({ "_id": busqueda })
                                        .populate('estudiante', 'nombre telefono email edad estatus');

    res.json({
        ok: true,
        busqueda,
        msg: 'Obteniendo Resulados getTodo',
        estudiantes,
        asignaturas
    })
}

module.exports = {
    getTodo
}