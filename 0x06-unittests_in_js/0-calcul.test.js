const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(4.0, 9.0), 13);
  });
    
  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 3.3), 4);
  });
  
  it('rounding down a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 3.2), 4);
  });
  
  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.2, 3.0), 4);
  });
  
  it('rounding up b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.0, 3.9), 6);
  });
  
  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.7, 3.6), 6);
  });
  
  it('rounding up a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(5.5, 3.0), 9);
  });
  
  it('rounding down a and b\'s floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(1.499999, 3.49999), 4);
  });
  
  it('rounding down negative a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(-1.6, 2.0), 0);
  });
  
  it('rounding up negative a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(-5.2, 6), 1);
  });

  it('rounding down negative b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.0, -4.7), -3);
  });
  
  it('rounding up negative b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.0, -4.3), -2);
  });

  it('rounding down negative a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(-1.6, -3.7), -6);
  });
 
  it('rounding up negative a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(-1.2, -3.4), -4);
  });
 
  it('rounding up a and b\'s floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(-1.499999, -3.49999), -4);
  });
});
