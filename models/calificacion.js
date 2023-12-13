const { Schema, model } = require('mongoose');

const CalificacionSchema = Schema({

    calificacion: {
        type: Number
    },
    estatus: {
        type: String,
        //required: true,
        //default: 'PENDIENTE'
    },
    id_estudiante: {
        type: Schema.Types.ObjectId,
        ref: 'Estudiante'    
    },
} );

CalificacionSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'Calificacion', CalificacionSchema );