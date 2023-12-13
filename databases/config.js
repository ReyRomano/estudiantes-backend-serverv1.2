//CONFIGURACION DE BASE D DATOS
const mongoose = require('mongoose');

const dbConnection = async() => {  //async x q despues usare el await

    try {
        //mongoose.connect('mongodb://127.0.0.1:27017/test');
        mongoose.connect('mongodb+srv://mean_user_students:dFrjZlX3qxBrmXZH@cluster0.safehvl.mongodb.net/estudiantesdb');

        console.log('DB Online');
        
    } catch (error) {
        console.log("error:", error);
        throw new Error('Error al iniciar la BD, ver logs');
        
    }

}

module.exports = {
    dbConnection
}