import { expect } from 'chai';
import ceil from '.';

describe('number/ceil()', () => {
    it('Rounds up value', () => {
        expect(ceil(42.42)).to.equal(43);
        expect(ceil(0.42)).to.equal(1);
    });

    it('Works with negative values', () => {
        expect(ceil(-42.42)).to.equal(-42);
        expect(ceil(-0.42)).to.equal(0);
    });

    it('Allows custom precision', () => {
        expect(ceil(5.4321, 3)).to.equal(5.433);
        expect(ceil(5.4321, 2)).to.equal(5.44);
        expect(ceil(5.4321, 1)).to.equal(5.5);
        expect(ceil(5.4321, 0)).to.equal(6);

        expect(ceil(-5.4321, 3)).to.equal(-5.432);
        expect(ceil(-5.4321, 2)).to.equal(-5.43);
        expect(ceil(-5.4321, 1)).to.equal(-5.4);
        expect(ceil(-5.4321, 0)).to.equal(-5);
    });

    it('Allows custom negative precision', () => {
        expect(ceil(54321, -3)).to.equal(55000);
        expect(ceil(54321, -2)).to.equal(54400);
        expect(ceil(54321, -1)).to.equal(54330);

        expect(ceil(-54321, -3)).to.equal(-54000);
        expect(ceil(-54321, -2)).to.equal(-54300);
        expect(ceil(-54321, -1)).to.equal(-54320);
    });

    it('Returns NaN for non-numeric value', () => {
        expect(ceil('')).to.deep.equal(NaN);
        expect(ceil('42')).to.deep.equal(NaN);
        expect(ceil('42.42')).to.deep.equal(NaN);
        expect(ceil(void 0)).to.deep.equal(NaN);
        expect(ceil(null)).to.deep.equal(NaN);
        expect(ceil({})).to.deep.equal(NaN);
        expect(ceil([])).to.deep.equal(NaN);
        expect(ceil(true)).to.deep.equal(NaN);
    });
});
