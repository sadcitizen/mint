# min(array, [iteratee])

Returns the element in the array with the lowest value.

## Usage

```js
import min from 'doremi/array/min';

min([1, 2, 4, 3, 9, 0]);
// => 0

min([{ value: 1 }, { value: 2 }, { value: 3 }], x => x.value);
// => { value: 1 }
```