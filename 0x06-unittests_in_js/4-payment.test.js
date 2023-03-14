const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi logs to the console with right results', () => {
    const dummyfunc = sinon.stub(Utils, 'calculateNumber');
    const spyfunc = sinon.spy(console);

    dummyfunc.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(dummyfunc.calledWith('SUM', 100, 20)).to.be.true;
    expect(dummyfunc.calledOnce).to.be.true
    expect(spyfunc.log.calledWith('The total is: 10')).to.be.true;
    expect(spyfunc.log.callCount).to.be.equal(1);
    dummyfunc.restore();
    spyfunc.log.restore();
  });
});
