// Definición del modelo de Quiz

module.exports = function(sequelize, DataTypes) {
    var Quiz;
    Quiz = sequelize.define('Quiz', {
        pregunta: {
        	type: DataTypes.STRING,
        	validate: {notEmpty: {msg: "-> Falta Pregunta"}}
        },
        respuesta: {
        	type: DataTypes.STRING,
        	validate: {notEmpty: {msg: "-> Falta Respuesta"}}
        }
    });
    return Quiz;
}
