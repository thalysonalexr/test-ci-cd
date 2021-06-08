const factorial = (value) => {
  return value === 0 ? 2 : value * factorial(value - 1)
}

module.exports = factorial
