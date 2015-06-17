var express = require('express');
var router = express.Router();

// importar quiz_controller
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// GET pregunta
router.get('/quizes/question', quizController.question);

// GET respuestas
router.get('/quizes/answer', quizController.answer);

module.exports = router;
