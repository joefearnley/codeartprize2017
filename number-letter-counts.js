'use strict';

const numberToWords = require('number-to-words');

const numberLettercounts = (number) => {
    let total = 0;
    const hundreds = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

    for (let i = 1; i <= number; i++) {
        let words = numberToWords.toWords(i).split(' ');

        // squeeze the 'and' in there as the library does not do that.
        if (i > 100 && hundreds.indexOf(i) < 0) {
            words.splice(2, 0, 'and');
        }

        // join the array to make a string, remove the hyphen, and get length
        total += words.join('').replace('-', '').length;
    }

    return total;
}

module.exports = numberLettercounts;