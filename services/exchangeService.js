const exchangeRate = require('../exchangeRate.json')

class ExchangeService {
  getExchangeAmount (source, target, amount) {
    let result
    try {
      const sourceData = exchangeRate.currencies[source]
      if (!sourceData) throw new Error('沒有來源貨幣匯率資料')
      const targetRate = sourceData[target]
      if (!targetRate) throw new Error('來源貨幣沒有目標貨幣的換算匯率')
      if (typeof (amount) === 'string') amount = amount.replace(/^[^1-9]+|,/g, '')
      const exchangeAmount = Math.round(Number(amount) * targetRate * 100) / 100
      result = {
        success: true,
        data: exchangeAmount
      }
      return result
    } catch (error) {
      result = {
        success: false,
        message: error.message
      }
      return result
    }
  }

  addThousandthPlace (amount) {
    const comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
    const result = '$' + String(amount).replace(comma, ',')
    return result
  }
}

module.exports = new ExchangeService()
