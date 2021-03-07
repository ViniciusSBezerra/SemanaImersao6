const express = require('express')
const OrcamentoController = require('./controllers/OrcamentoController');
const HomeController = require('./controllers/HomeController');

const router = express.Router();

router.post('/orcamento', OrcamentoController.create);
router.get('/orcamento', OrcamentoController.index);

router.post('/', HomeController.create);
router.get('/', HomeController.index);


module.exports = router;