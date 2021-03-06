import isDefined from '../../common/is-defined';
import { MIN_INT, MAX_INT } from '../../internal/constants';

const { floor, random } = Math;

/**
 * Generates a pseudo-random integer number.
 *
 * @param {number} min The minimum value to generate.
 * @param {number} max The maximum value to generate.
 * @return {number} Return the integer number.
 *
 * @example
 * int(10, 20);
 * // => 16
 *
 * int(10, 20);
 * // => 12
 */
export default function (min, max) {
    min = isDefined(min) ? ~~min : MIN_INT;
    max = isDefined(max) ? ~~max : MAX_INT;

    if (min > max) {
        throw new Error('Minimum value cannot be greater than maximum value.');
    }

    return floor(random() * (max - min + 1) + min);
}
