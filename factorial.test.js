const factorial = require('./factorial')

describe('factorial', () => {
  test('factorial of 5 is 120', () => {
    expect(factorial(5)).toBe(120)
  })
  
  test('factorial of 9 is 362880', () => {
    expect(factorial(9)).toBe(362880)
  })
})
