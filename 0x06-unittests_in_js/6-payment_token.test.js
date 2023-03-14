const { expect } = require('chai');
const getPaymentTokenFromApi = require('./6-payment_token');

describe('getPaymentTokenFromApi', () => {
  it('getPaymentTokenFromApi(success), where success === true', (done) => {
    getPaymentTokenFromApi(true)
      .then((res) => {
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        done();
      });
  });
});
