//console.log("Hola Mundo");

const express = require('express'); //En Ang: import express from 'express';

const cors = require('cors');

const { dbConnection } = require('./databases/config');

//Crear el servidor express
const app = express();

//Configurar CORS
app.use(cors());

//Lectura y parseo del body
app.use( express.json() );

//Base de Datos
dbConnection();

//mean_user_students
//dFrjZlX3qxBrmXZH

//Rutas / APIS Hola Mundo
app.get('/', (req, res) => {

    //res.status(400).json({
    res.json({
        ok: true,
        msg: 'Hola MundoR -- Aqui colocaremos resul de estudiantes'
    });

});

//  Rutas/APIS estudiantes
app.use( '/api/estudiantes', require('./routes/estudiantes') );

//  Rutas/APIS asignaturas
app.use( '/api/asignaturas', require('./routes/asignaturas') );


// //  Rutas/APIS busquedas
app.use( '/api/todo/', require('./routes/busquedas') );


//Levantando servidor
app.listen( 3002, () => {
    console.log('Servidor corriendo en puerto: ' + 3002 );
} );