const router = require('express').Router();

const {
    getQuote
} = require('../controllers/quote');

// router.get('/qu/:codeExchange', getFinancialData);
router.get('/quote/:symbol', getQuote);

module.exports = router;