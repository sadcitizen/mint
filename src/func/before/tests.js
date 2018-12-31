import {
    INVALID_FUNCTION_FIRST_ARGUMENT,
    INVALID_NUMBER_SECOND_ARGUMENT
} from '../../constants/errors';
import before from '.';

describe('func/before()', () => {
    test('returns a new function', () => {
        expect(before(jest.fn(), 5)).toEqual(expect.any(Function));
    });

    test('does not execute the function after 2 calls', () => {
        const add = (x, y) => x + y;
        const addThreeTimes = before(add, 3);

        expect(addThreeTimes(1, 1)).toBe(2);
        expect(addThreeTimes(2, 2)).toBe(4);
        expect(addThreeTimes(3, 3)).toBe(4);
        expect(addThreeTimes(4, 4)).toBe(4);
    });

    test('throws exception if function is invalid', () => {
        expect(() => before('jest.fn()', 100)).toThrow(INVALID_FUNCTION_FIRST_ARGUMENT);
        expect(() => before(jest.fn(), '100')).toThrow(INVALID_NUMBER_SECOND_ARGUMENT);
        expect(() => before(jest.fn(), 0)).toThrow('Second argument must be a positive number');
        expect(() => before(jest.fn(), -1)).toThrow('Second argument must be a positive number');
    });
});