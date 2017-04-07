# @iterables/map

A map generator for iterators.

```javascript

const map = require('@iterables/map')

const iter = map(function * () {
  yield 1
  yield 2
}(), xs => xs * 2)

console.log([...iter]) // [2, 4]
```

## Installation

```
$ npm install --save @iterables/map
```

## API

### `map(iterable, fn) -> Iterator`

* `iterable`: any `Iterator` — a generator instance, `Array`, `Map`, `String`, or `Set`
* `fn`: A function taking `xs`, `idx`, and `all` and returning any value.
  * `xs`: an item from `iterable`.
  * `idx`: a number reflecting the index of the current item.
  * `all`: the full `iterable` object.

Returns a mapped iterator. Pretty standard stuff!

## License

MIT
