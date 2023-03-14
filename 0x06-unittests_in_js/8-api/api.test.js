const { expect } = require('chai');
const request = require('request');

describe('Index page:w', () => {
  const URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
