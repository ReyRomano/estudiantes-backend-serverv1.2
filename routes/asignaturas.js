/*
    Asignaturas
    Ruta: api/asignaturas
*/

const { Router } = require('express');

const {
    getAsignaturas,
    crearAsignatura,
    actualizarAsignatura

} = require('../controllers/asignaturas')

const router = Router();

//Ruta para GET-CONSEGUIR asignaturas
router.get( '/', getAsignaturas );

//Ruta para POSTEAR-CREAR asignatura
router.post( '/', 
            [], //aqui van middlewares, tokens, etc
            crearAsignatura 
);

//Ruta para PUT-EDITAR asignatura
router.put('/:id', actualizarAsignatura);


module.exports = router;    //Exportacion x defecto