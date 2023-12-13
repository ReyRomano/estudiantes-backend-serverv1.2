// Ruta: api/estudiantes

// Ruta: api/usuarios

const { Router } = require('express');

const {
    getEstudiantes,
    crearEstudiante,
    actualizarEstudiante,
    getEstudiantePorId,
    
} = require('../controllers/estudiantes')

const router = Router();

//Ruta para CONSEGUIR estuidante
router.get( '/', getEstudiantes );

//Ruta para CONSEGUIR estuidante x ID
router.get( '/:id', getEstudiantePorId );

//Ruta para POSTEAR-CREAR estuidante
router.post( '/', crearEstudiante );

//Ruta para ACTUALIZAR estuidante
router.put( '/:id', actualizarEstudiante );


module.exports = router;    //Exportacion x defecto