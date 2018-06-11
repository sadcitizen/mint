import uniqueWith from '.';

describe('array/uniqueWith()', () => {
    test('returns unique elements from the array', () => {
        const target = [1, 2, 1, 3, 1, 4];
        const expected = [1, 2, 3, 4];

        expect(uniqueWith(target)).toEqual(expected);
    });

    test('allows comparator to specify equality', () => {
        const target = [{ name: 'Casper' }, { name: 'Richard' }, { name: 'Casper' }];
        const expected = [{ name: 'Casper' }, { name: 'Richard' }];
        const comparator = (value, other) => value.name === other.name;

        expect(uniqueWith(target, comparator)).toEqual(expected);
    });
});
