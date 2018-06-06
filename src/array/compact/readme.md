# compact(array)

Returns a copy of the `target` without any `null` or `undefined` values.

## Usage

```js
import compact from 'doremi/array/compact';

compact([1, 2, 3]);
// => [1, 2, 3]

compact([null, undefined, 1, false]);
// => [1, false]
```