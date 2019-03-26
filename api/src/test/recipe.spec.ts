import * as chai from 'chai'
import app from '../app'
import chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe('Recipe API', () => {
  it('/recipes should return json', () => {
    return chai.request(app).get('/api/v1/recipes').then(res => {
      chai.expect(res.status).to.equal(200) // checks if the route exists
      chai.expect(res).to.be.json // checks if the route returns json
      chai.expect(res.body).to.not.be.empty // checks if the array of recipes isn't empty
    })
  })
  it('/recipes/banana_pancakes should return json', () => {
    return chai.request(app).get('/api/v1/recipes/banana_pancakes').then(res => {
      chai.expect(res.status).to.equal(200)
      chai.expect(res).to.be.json
      chai.expect(res.body).to.exist // checks if the recipe isn't null
    })
  })
  it('/categories should return json', () => {
    return chai.request(app).get('/api/v1/categories').then(res => {
      chai.expect(res.status).to.equal(200)
      chai.expect(res).to.be.json
      chai.expect(res.body).to.not.be.empty
    })
  })
  it('/categories/breakfasts should return json', () => {
    return chai.request(app).get('/api/v1/categories/breakfasts').then(res => {
      chai.expect(res.status).to.equal(200)
      chai.expect(res).to.be.json
      chai.expect(res.body).to.not.be.empty
    })
  })
})
