var path = require('path');

// Postgres DATABASE_URL = postgres://user:password@host:port/database
// SQLite   DATABASE_URL = sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/),
    DB_name  = (url[6]||null),
    user     = (url[2]||null),
    pwd      = (url[3]||null),
    protocol = (url[1]||null),
    dialect  = (url[1]||null),
    port     = (url[5]||null),
    host     = (url[4]||null),
    storage  =  process.env.DATABASE_STORAGE;

// Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite o Postgres:
var sequelize = new Sequelize(DB_name, user, pwd, {
    dialect:  dialect,
    protocol: protocol,
    port:     port,
    host:     host,
    storage:  storage,  // solo SQLite (.env)
    omitNull: true      // solo Postgres
});

// Importar la definición de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

// Importar la definición de la tabla Tema en tema.js
var Tema = sequelize.import(path.join(__dirname, 'tema'));

Quiz.belongsTo(Tema);
Tema.hasMany(Quiz);

exports.Quiz = Quiz;
exports.Tema = Tema;

// sequelize.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync().then(function() {
    Tema.count().then(function(count) {
        if (count === 0) {
            Tema.create({
                nombre: 'otro',
            });
            Tema.create({
                nombre: 'humanidades',
            });
            Tema.create({
                nombre: 'ocio',
            });
            Tema.create({
                nombre: 'ciencia',
            });
            Tema.create({
                nombre: 'tecnologia',
            }).then(function() {
                Tema.findOne({
                    where: { 
                        nombre: 'humanidades'
                    }
                }).then(function (humanidades) {
                    console.log(humanidades.id);
                    Quiz.count().then(function(count) {
                        if (count === 0) {      // la tabla se inicializa solo si está vacía
                            Quiz.create({
                                pregunta: 'Capital de Italia',
                                respuesta: 'Roma',
                                TemaId: humanidades.id
                            });
                            Quiz.create({
                                pregunta: 'Capital de Portugal',
                                respuesta: 'Lisboa',
                                TemaId: humanidades.id
                            }).then(function() {
                                console.log('Base de datos inicializada');
                            });
                        }
                    });
                });
            });
        }
    });
    // then(..) ejecuta el manejador una vez creada la tabla
});
