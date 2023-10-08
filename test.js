const chai = require('chai')
const request = require('supertest')
const expect = chai.expect
const app = require('./app')

// 換匯
describe('# exchange test', () => {
  it('台幣$500應換到日幣$1,834.5', async() => {
    const response = await request(app).get('/api/getExchangeAmount?source=TWD&target=JPY&amount=$500')
    expect(response.body.msg).to.equal('success')
    expect(response.body.amount).to.equal('$1,834.5')
  })

  it('日幣$2,000.3369應換到美元$17.7', async() => {
    const response = await request(app).get('/api/getExchangeAmount?source=JPY&target=USD&amount=$2,000.3369')
    expect(response.body.msg).to.equal('success')
    expect(response.body.amount).to.equal('$17.7')
  })

  it ('美元$1,525應換到日幣$170,496.53', async() => {
    const response = await request(app).get('/api/getExchangeAmount?source=USD&target=JPY&amount=$1,525')
    expect(response.body.msg).to.equal('success')
    expect(response.body.amount).to.equal('$170,496.53')
  })
})

