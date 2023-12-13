/*
    Ruta: /api/todo/:busqueda
*/

const { Router } = require('express');

const {
    getTodo
} = require('../controllers/busquedas');

const router = Router();

//Ruta para conseguir ID
router.get( '/:busqueda', getTodo );

module.exports = router;    //Exportacion x defecto