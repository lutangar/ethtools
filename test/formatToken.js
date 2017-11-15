import { expect } from 'chai';
import BN from 'bn.js';
import formatToken from '../src/formatToken';

describe('formatToken', () => {
    it('format a number a number of token to the specified format', () => {
        expect(formatToken('1000000000000000000', '0,0.0[00]', 16, 'TOK')).to.equal('100.0');
        expect(formatToken('1000000000000000', '0,0.0[00]', 16, 'TOK')).to.equal('0.1');
        expect(formatToken('0', '0,0.0[00]', 16, 'TOK')).to.equal('0.0');
        expect(formatToken('0', '0,0.0[00] $', 16, 'TOK')).to.equal('0.0 TOK');
        expect(formatToken(new BN(0), '0,0.0[00]', 16, 'TOK')).to.equal('0.0');
    });
});
