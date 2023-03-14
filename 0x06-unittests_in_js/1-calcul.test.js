const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type === "SUM"', () => {
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 3.0, 3.0), 6);
    });
 
    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -3.0, -3.0), -6);
    });
 
    it('just positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 3.2, 3.8), 7);
    });

    it('just negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -3.4, -2.7), -6);
    });
 
    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 3.7, -2.4), 2);
    });
 
    it('negative and positive number', () => {
      assert.strictEqual(calculateNumber('SUM', -3.6, 3.2), -1);
    });
 
    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('type === "SUBTRACT"', () => {
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.0, 3.0), 0);
    });
 
    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3.0, -3.0), 0);
    });
 
    it('just positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.2, 3.8), -1);
    });

    it('just negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3.4, -2.7), 0);
    });
 
    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, -2.4), 6);
    });
 
    it('negative and positive number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3.6, 3.2), -7);
    });
 
    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('type === "DIVIDE"', () => {
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 3.0), 1);
    });
 
    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3.0, -3.0), 1);
    });
 
    it('just positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.2, 3.8), 0.75);
    });

    it('just negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3.4, -2.7), 1);
    });
 
    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.7, -2.4), -2);
    });
 
    it('negative and positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3.6, 2.2), -2);
    });
 
    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });

    it('positive a and b being 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 0.0), 'Error');
    });

    it('negative a and b being 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.5, 0.0), 'Error');
    });
  });
});
