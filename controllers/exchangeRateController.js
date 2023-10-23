const ExchangeService = require('../services/exchangeService')

class ExchangeRateController {
  getExchangeAmount(req, res, next) {
    let message;
    try {
    let {source, target, amount} = req.query
    if (!source || !target || !amount) throw new Error('query string必需有3個')
    
    const currencyExchange = ExchangeService.getExchangeAmount(source, target, amount)
    if (!currencyExchange.success) throw new Error(currencyExchange.message)
    const thousandthPlaceAmount = ExchangeService.addThousandthPlace(currencyExchange.data)
    
    message = {
      msg: 'success',
      amount: thousandthPlaceAmount
    }
  } catch (err) {
    message = {
      msg: 'error',
      error: err.message
    }
    
  } finally {
    res.json(message)
  }
  }
}

module.exports = new ExchangeRateController()