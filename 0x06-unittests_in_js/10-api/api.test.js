const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const URL = 'http://localhost:7865/cart';

  it('GET /cart/:id returns correct response for valid id', (done) => {
    request.get(`${URL}/63`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 63');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number id values', (done) => {
    request.get(`${URL}/-50`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

 it('GET /cart/:id returns 404 response for non-numeric id values', (done) => {
    request.get(`${URL}/date-1450-15-20`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});

describe('Login page', () => {
  const URL = 'http://localhost:7865/login';
    
  it('POST /login returns valid response', (done) => {
    request.post(`${URL}`, {json: {userName: 'Yobra'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Yobra');
      done();
    });
  });

  it('POST /login returns valid response if lacks data to post', (done) => {
    request.post(`${URL}`, {}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });
});

describe('Available_payments page', () => {
  const URL = 'http://localhost:7865/available_payments';

  it('GET /available_payments returns a valid response', (done) => {
    request.get(`${URL}`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
