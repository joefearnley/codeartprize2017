'use strict';

const numberToWords = require('number-to-words');

const numberLettercounts = (number) => {
    if (number < 10) { 
        let total = 0;
        for (let i = 1; i <= number; i++) {
            total += numberToWords.toWords(i).length;
        }
        return total;
    }

    const hundreds = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
    let words = numberToWords.toWords(number).split(' ');

    // squeeze the 'and' in there as the library does not do that.
    if (number > 100 && hundreds.indexOf(words) < 0) {
        words.splice(2, 0, 'and');
    }
    return words.join('').replace('-', '').length;
}

module.exports = numberLettercounts;