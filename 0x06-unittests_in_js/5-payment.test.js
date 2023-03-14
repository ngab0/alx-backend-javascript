const { expect } = require('chai');
const  { spy } = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let dummyfunc;

  beforeEach(() => {
    if (!dummyfunc) dummyfunc = spy(console);
  });

  afterEach(() => {
    dummyfunc.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(dummyfunc.log.calledOnce).to.be.true
    expect(dummyfunc.log.calledWith('The total is: 120')).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(dummyfunc.log.calledOnce).to.be.true
    expect(dummyfunc.log.calledWith('The total is: 20')).to.be.true;
  });
});
