import hex from '../hex';
import choice from '../choice';

/**
 * Generates a pseudo-random Globally Unique Identifier (v4).
 *
 * @returns {string}
 */
export default () => `${hex(8)}-${hex(4)}-4${hex(3)}-${choice(8, 9, 'a', 'b')}${hex(3)}-${hex(12)}`;