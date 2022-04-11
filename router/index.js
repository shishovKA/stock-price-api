const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const { getQuote } = require('../controllers/quote');
const { postHistorical } = require('../controllers/historical');

// router.get('/qu/:codeExchange', getFinancialData);
router.get('/quote/:symbol', getQuote);
router.post('/historical', postHistorical);

module.exports = router;