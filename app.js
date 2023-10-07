const express = require('express')
const app = express()

app.get('/getExchangeAmount', (req, res) => {
  try {
    let {source, target, amount} = req.query
    if (!source || !target || !amount) throw new Error('query string必需有3個')
    const exchangeRate = require('./exchangeRate.json')
    const sourceData = exchangeRate.currencies[source]
    if (!sourceData) throw new Error('沒有來源貨幣匯率資料')
    const targetRate = sourceData[target]
    if (!targetRate) throw new Error('來源貨幣沒有目標貨幣的換算匯率')
    if (typeof(amount) === 'string') amount = amount.replace(/^[^1-9]+|,/g, '')
    let result = Math.round(Number(amount) * targetRate * 100) /100;
    const comma=/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
    result = '$' + String(result).replace(comma, ',')
    const message = {
      msg: 'success',
      amount: result
    }
    res.json(message)
  } catch (err) {
    const message = {
      msg: 'error',
      error: err.message
    }
    res.json(message)
  }
  
  
})


app.listen('3000', () => {
  console.log('app is running on localhost:3000')
})
