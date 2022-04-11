const yahooFinance = require('yahoo-finance');

module.exports.postHistorical = (req, res, next) => {
    const body = req.body;
    yahooFinance.historical(body, function (err, quotes) {
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