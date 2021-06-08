const factorial = (value) => {
  return value === 0 ? 1 : value * factorial(value - 1)
}

module.exports = factorial
