/*
    Calificaciones
    Ruta: api/calificaciones
*/

const { Router } = require('express');

const {
    getCalificaciones,
    crearCalificacion

} = require('../controllers/calificaciones')

const router = Router();

//Ruta para CONSEGUIR calificaciones
router.get( '/', getCalificaciones );  //Despues de pasar x el middleware 'validarJWT', salta al 'getUsuarios'

//Ruta para POSTEAR-CREAR usuario
router.post( '/', 
            [],
            crearCalificacion 
);


module.exports = router;    //Exportacion x defecto