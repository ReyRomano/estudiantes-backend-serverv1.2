const { Schema, model } = require('mongoose');

const EstudianteSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
    },
    email: {
        type: String
    },
    edad: {
        type: Number
    },
    estatus: {
        type: String,
        //required: true,
        //default: 'PENDIENTE'
    },
    asignaturas: {
        type: Schema.Types.ObjectId,
        ref: 'Asignatura'
    }
    
});

EstudianteSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'Estudiante', EstudianteSchema );