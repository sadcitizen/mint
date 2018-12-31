import {
    INVALID_FUNCTION_FIRST_ARGUMENT,
    INVALID_NUMBER_SECOND_ARGUMENT
} from '../../constants/errors';
import isFunction from '../../common/is-function';
import isNumber from '../../common/is-number';

/**
 * Creates a new function that invokes `fn` while it's called less than `times` and store the result of last call.
 *
 * @memberOf func
 * @param {Function} fn The function to invoke.
 * @param {number} times The number of calls before `fn` is no longer invoked.
 * @return {Function} Returns the new restricted function.
 */
export default function (fn, times) {
    if (!isFunction(fn)) {
        throw new TypeError(INVALID_FUNCTION_FIRST_ARGUMENT);
    }

    if (!isNumber(times)) {
        throw new TypeError(INVALID_NUMBER_SECOND_ARGUMENT);
    }

    if (times < 1) {
        throw new RangeError('Second argument must be a positive number');
    }

    let result;

    return function (...args) {
        /* eslint-disable no-param-reassign */
        /* eslint-disable no-plusplus */
        if (--times > 0) {
            result = fn(...args);
        } else {
            fn = null;
        }

        return result;
        /* eslint-enable no-plusplus */
        /* eslint-enable no-param-reassign */
    };
}