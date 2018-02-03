import isBlank from '.';

describe('string/isBlank()', () => {
    test('Returns true for a blank string', () => {
        expect(isBlank('')).toBe(true);
        expect(isBlank('       \t \n   ')).toBe(true);
    });

    test('Returns false for other strings', () => {
        expect(isBlank('hello')).toBe(false);
        expect(isBlank('apple, orange')).toBe(false);
        expect(isBlank(JSON.stringify({ a: [1, 2, 3, 4], b: { c: 'd' } }))).toBe(false);
    });
});