const { countB, countChar } = require('./index');

describe('Bean Counting Tests', () => {

  test('countB function is defined', () => {
    expect(countB).toBeDefined();
  });

  test('countB("BomBastic"', () => {
    expect(countB('BomBastic')).toBe(2);
  });

  test('countChar function is defined', () => {
    expect(countChar).toBeDefined();
  });

  test('countChar("BomBastic")', () => {
    expect(countChar('BomBastic', 'B')).toBe(2);
  });

  test('countChar("testing testing","t")', () => {
    expect(countChar('testing testing', 't')).toBe(4);
  })

  test('countChar("testing testing", "h")', () => {
    expect(countChar('testing testing', 'h')).toBe(0);
  })

});