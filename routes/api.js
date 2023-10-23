const express = require('express')
const router = express.Router()

const exchangeRateController = require('../controllers/exchangeRateController')

router.get('/getExchangeAmount', exchangeRateController.getExchangeAmount)

module.exports = router
