import toString from '../to/toString';

/**
 * Chops the string into pieces with length equal `step`.
 *
 * @param {string} target The string to chopping.
 * @param {number} step The length of piece.
 * @returns {Array} The array of pieces.
 *
 * @example
 *
 * chop('lorem ipsum', 5);
 * // => ['lorem', ' ipsu', 'm']
 *
 * chop(1234567890);
 * // => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
 */
function chop(target, step) {
    var result = [], i, length;

    step = step | 0;
    target = toString(target);

    if (target.length === 0) {
        return [];
    }

    if (step < 2) {
        return target.split('');
    }

    length = target.length;

    for (i = 0; i < length; i += step) {
        result.push(target.slice(i, i + step));
    }

    return result;
}

export default chop;