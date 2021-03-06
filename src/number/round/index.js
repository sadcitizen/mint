import baseRound from '../../internal/base-round';

/**
 * Creates number rounded to precision.
 *
 * @param {number} num The number to round.
 * @param {number} precision The precision to round to.
 * @returns {number} Returns the rounded number.
 *
 * @example
 *
 * round(42.52);
 * // => 43
 *
 * round(5.4321, 2);
 * // => 5.43
 */
export default baseRound('round');
