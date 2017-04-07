'use strict'

module.exports = map

function * map (iterable, fn) {
  if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
    throw new TypeError('expected an iterable as the first argument')
  }

  if (typeof fn !== 'function') {
    throw new TypeError('expected second argument to be a function')
  }

  let idx = 0
  for (const value of iterable) {
    yield fn(value, idx++, iterable)
  }
}
