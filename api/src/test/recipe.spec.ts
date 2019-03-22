import * as chai from 'chai'
import app from '../app'
import chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe('Recipe API', () => {
  it('/recipes should return json', () => {
    return chai.request(app).get('/api/v1/recipes').then(res => {
      chai.expect(res.status).to.equal(200)
      chai.expect(res).to.be.json // checks if the route exists
      chai.expect(res.text).not.to.eql("null") // checks if the recipe exists
    })
  })
  it('/recipes/banana_pancakes should return json', () => {
    return chai.request(app).get('/api/v1/recipes/banana_pancakes').then(res => {
      chai.expect(res.status).to.equal(200)
      chai.expect(res).to.be.json
      chai.expect(res.text).not.to.eql("null")
    })
  })
  it('/categories/breakfasts should return json', () => {
    return chai.request(app).get('/api/v1/categories/breakfasts').then(res => {
      chai.expect(res.status).to.equal(200)
      chai.expect(res).to.be.json
      chai.expect(res.text).not.to.eql("null")
    })
  })
  it('/categories/desserts should return json', () => {
    return chai.request(app).get('/api/v1/categories/desserts').then(res => {
      chai.expect(res.status).to.equal(200)
      chai.expect(res).to.be.json
      chai.expect(res.text).not.to.eql("null")
    })
  })
  it('/categories/lunches should return json', () => {
    return chai.request(app).get('/api/v1/categories/lunches').then(res => {
      chai.expect(res.status).to.equal(200)
      chai.expect(res).to.be.json
      chai.expect(res.text).not.to.eql("null")
    })
  })
  it('/categories/sauces should return json', () => {
    return chai.request(app).get('/api/v1/categories/sauces').then(res => {
      chai.expect(res.status).to.equal(200)
      chai.expect(res).to.be.json
      chai.expect(res.text).not.to.eql("null")
    })
  })
})
