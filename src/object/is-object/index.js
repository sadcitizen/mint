/**
 * Checks if `target` is an object.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is an object, else 'false'.
 *
 * @example
 *
 * isObject('');
 * // => false
 *
 * isObject({ a: 'b', c: 'd' });
 * // => true
 *
 * isObject({});
 * // => true
 */
export default target => Object.prototype.toString.call(target) === '[object Object]';
