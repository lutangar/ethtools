import { DEFAULT_OPTIONS } from './constants';
import BN from 'bn.js';
import formatNumber from './formatNumber';

/**
 * Format a number of token.
 */
export default (number, format, decimals = 0, unit, options = DEFAULT_OPTIONS) => {
    if (number instanceof BN) {
        number = number.toString(10);
    }

    const numberOfMissingZeros = decimals - number.length;

    // pad with 0 on left
    number = `${new Array(numberOfMissingZeros > 0 ? numberOfMissingZeros : 0).join('0')}${number}`;

    // place the decimal point
    number = `${number.slice(0, -decimals)}.${number.slice(-decimals)}`;

    // console.log('number.substr(decimals)', number.substr(-1, decimals));

    return formatNumber(number, format, unit, { ...DEFAULT_OPTIONS, ...options });
};
