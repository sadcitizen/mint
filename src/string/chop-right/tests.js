import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import VOID_0 from '../../constants/void-0';
import chopRight from '.';

describe('string/chopRight()', () => {
    test('returns a string chopped into pieces', () => {
        expect(chopRight('lorem ipsum', 5)).toEqual(['l', 'orem ', 'ipsum']);
        expect(chopRight('lorem ipsum', 4)).toEqual(['lor', 'em i', 'psum']);
        expect(chopRight('lorem ipsum', 3)).toEqual(['lo', 'rem', ' ip', 'sum']);
        expect(chopRight('lorem ipsum', 2)).toEqual(['l', 'or', 'em', ' i', 'ps', 'um']);
        expect(chopRight('lorem ipsum', 1)).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chopRight('lorem ipsum', 0)).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chopRight('haha', 2)).toEqual(['ha', 'ha']);
    });

    test('works with null and undefined', () => {
        expect(chopRight('lorem ipsum')).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chopRight('lorem ipsum', VOID_0)).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chopRight('lorem ipsum', null)).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
    });

    test('treats negative step as zero', () => {
        expect(chopRight('lorem ipsum', -0)).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chopRight('lorem ipsum', -10)).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
        expect(chopRight('lorem ipsum', -1000)).toEqual(['l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm']);
    });

    test('throws type error if the given value is not a string', () => {
        expect(() => chopRight(123456)).toThrow(INVALID_STRING_ARGUMENT);
    });
});