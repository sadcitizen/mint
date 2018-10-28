import string, {
    camelCase,
    capitalize,
    chop,
    chopRight,
    kebabCase,
    repeat,
    reverse,
    snakeCase,
    truncate,
    words
} from '.';

describe('doremi/string', () => {
    test('imports doremi/string as object', () => {
        expect(string).toEqual(expect.any(Object));
    });

    test('doremi/string has correct properties', () => {
        expect(string).toHaveProperty('camelCase', camelCase);
        expect(string).toHaveProperty('capitalize', capitalize);
        expect(string).toHaveProperty('chop', chop);
        expect(string).toHaveProperty('chopRight', chopRight);
        expect(string).toHaveProperty('kebabCase', kebabCase);
        expect(string).toHaveProperty('repeat', repeat);
        expect(string).toHaveProperty('reverse', reverse);
        expect(string).toHaveProperty('snakeCase', snakeCase);
        expect(string).toHaveProperty('truncate', truncate);
        expect(string).toHaveProperty('words', words);
    });
});
