var express = require('express');
var router = express.Router();

// importar quiz_controller
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load);

// GET /quizes
router.get('/quizes', quizController.index);

// GET /quizes/:id
router.get('/quizes/:quizId(\\d+)', quizController.show);

// GET /quizes/:id/answer
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

// GET /quizes/new
router.get('/quizes/new', quizController.new);

// POST /quizes/create
router.post('/quizes/create', quizController.create);


/*
// GET pregunta
router.get('/quizes/question', quizController.question);

// GET respuestas
router.get('/quizes/answer', quizController.answer);
*/

// GET /author
router.get('/author', function(req, res) {
    res.render('author');
});

module.exports = router;
