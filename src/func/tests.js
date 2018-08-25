import func, { after } from '.';

describe('doremi/func', () => {
    test('imports doremi/func as object', () => {
        expect(func).toEqual(expect.any(Object));
    });

    test('doremi/func has correct properties', () => {
        expect(func).toHaveProperty('after', after);
    });
});