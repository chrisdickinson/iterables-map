'use strict'

const tap = require('tap')

const map = require('./iterables-map')

function test (name, testCase) {
  return tap.test(name, assert => {
    testCase(assert)
    return Promise.resolve()
  })
}

test('fails if falsey iterable given', assert => {
  assert.throws(TypeError, () => {
    Array.from(map(null))
  })
  assert.throws(TypeError, () => {
    Array.from(map(false))
  })
  assert.throws(TypeError, () => {
    Array.from(map(0))
  })
})

test('fails if non-iterable given', assert => {
  assert.throws(TypeError, () => {
    Array.from(map({[Symbol.iterable]: null}))
  })
  assert.throws(TypeError, () => {
    Array.from(map(true))
  })
  assert.throws(TypeError, () => {
    Array.from(map(1))
  })
})

test('fails if non-function given as second arg', assert => {
  assert.throws(TypeError, () => {
    Array.from(map([]))
  })
  assert.throws(TypeError, () => {
    Array.from(map([]), true)
  })
  assert.throws(TypeError, () => {
    Array.from(map([]), {})
  })
})

test('it calls the function on every element', assert => {
  assert.deepEqual(Array.from(map([1, 2, 3], xs => xs * 2)), [
    2,
    4,
    6
  ])
})

test('it calls the function with idx on every element', assert => {
  assert.deepEqual(Array.from(map([1, 2, 3], (_, idx) => idx)), [
    0,
    1,
    2
  ])
})

test('it calls the function with all on every element', assert => {
  const arr = [1, 2, 3]
  assert.deepEqual(Array.from(map(arr, (_0, _1, all) => arr)), [
    arr,
    arr,
    arr
  ])
})
