const yahooFinance = require('yahoo-finance');

module.exports.getQuote = (req, res, next) => {
    const { symbol } = req.params;
    yahooFinance.quote({
      symbol: symbol,
      modules: [ 'price']
    }, function (err, quotes) {
      if (!err) {
        res.send(quotes);
      } else {
        res.status(400).send({
            message: statusCode === 400
                ? 'An error occurred'
                : err,
            });
      }
    });
  };