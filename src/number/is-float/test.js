import { expect } from 'chai';
import isFloat from '.';

describe('number/isFloat()', () => {
    it('Return true if value is float number', () => {
        expect(isFloat(42.42)).to.equal(true);
    });

    it('Return false for other numbers', () => {
        expect(isFloat(42)).to.equal(false);
        expect(isFloat(0)).to.equal(false);
    });

    it('Return false if value is not numeric or is nan', () => {
        expect(isFloat(null)).to.equal(false);
        expect(isFloat(NaN)).to.equal(false);
        expect(isFloat(true)).to.equal(false);
        expect(isFloat('')).to.equal(false);
        expect(isFloat([])).to.equal(false);
        expect(isFloat({})).to.equal(false);
        expect(isFloat(new Date())).to.equal(false);
        expect(isFloat(/\s+/ig)).to.equal(false);
    });
});
