const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type === "SUM"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4)
    });
 
    it('equal negative numbers', () => {
      expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4)
    });
 
    it('just positive numbers', () => {
      expect(calculateNumber('SUM', 3.4, 5.6)).to.equal(9)
    });

    it('just negative numbers', () => {
      expect(calculateNumber('SUM', -3.4, -5.6)).to.equal(-9)
    });
 
    it('positive and negative numbers', () => {
      expect(calculateNumber('SUM', 2.7, -1.3)).to.equal(2)
    });
 
    it('negative and positive number', () => {
      expect(calculateNumber('SUM', -2.7, 1.3)).to.equal(-2)
    });
 
    it('0 and 0', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0)
    });
  });

  describe('type === "SUBTRACT"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0)
    });
 
    it('equal negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0)
    });
 
    it('just positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.6, 2.4)).to.equal(4)
    });

    it('just negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -5.6, -2.4)).to.equal(-4)
    });
 
    it('positive and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', 3.4, -2.6)).to.equal(6)
    });
 
    it('negative and positive number', () => {
      expect(calculateNumber('SUBTRACT', -3.4, 2.6)).to.equal(-6)
    });
 
    it('0 and 0', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0)
    });
  });

  describe('type === "DIVIDE"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1)
    });
 
    it('equal negative numbers', () => {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1)
    });
 
    it('just positive numbers', () => {
      expect(calculateNumber('DIVIDE', 2.4, 3.8)).to.equal(0.5)
    });

    it('just negative numbers', () => {
      expect(calculateNumber('DIVIDE', -3.2, -3.8)).to.equal(0.75)
    });
 
    it('positive and negative numbers', () => {
      expect(calculateNumber('DIVIDE', 2.4, -4.6)).to.equal(-0.4)
    });
 
    it('negative and positive number', () => {
      expect(calculateNumber('DIVIDE', -2.4, 4.6)).to.equal(-0.4)
    });
 
    it('0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error')
    });

    it('positive a and b being 0', () => {
      expect(calculateNumber('DIVIDE', 5.6, 0.0)).to.equal('Error')
    });

    it('negative a and b being 0', () => {
      expect(calculateNumber('DIVIDE', -5.6, 0.0)).to.equal('Error')
    });
  });
});
