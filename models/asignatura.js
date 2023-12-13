const { Schema, model } = require('mongoose');

const AsignaturaSchema = Schema({

    espanol: {
        type: Number,
        default: '0'
    },
    matematicas: {
        type: Number,
        //required: true,
        default: '0'
    },
    deportes: {
        type: Number,
        default: '0'
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: 'Estudiante',
        //default: 'Recuerde actualizar este campo'
    },
} );

AsignaturaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model( 'Asignatura', AsignaturaSchema );