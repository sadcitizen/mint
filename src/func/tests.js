import func, {
    compose,
    defer,
    delay,
    identity,
    partial,
    partialRight,
    pipe,
    repeat
} from '.';

describe('doremi/func', () => {
    test('imports doremi/func as object', () => {
        expect(func).toEqual(expect.any(Object));
    });

    test('doremi/func has correct properties', () => {
        expect(func).toHaveProperty('compose', compose);
        expect(func).toHaveProperty('defer', defer);
        expect(func).toHaveProperty('delay', delay);
        expect(func).toHaveProperty('identity', identity);
        expect(func).toHaveProperty('partial', partial);
        expect(func).toHaveProperty('partialRight', partialRight);
        expect(func).toHaveProperty('pipe', pipe);
        expect(func).toHaveProperty('repeat', repeat);
    });
});
