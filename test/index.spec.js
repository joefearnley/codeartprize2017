'use strict';

const assert = require('assert');
const numberLetterCounts = require('../number-letter-counts');

describe('Test Suite', function() {
    it('should contain 19 letters when on 5 (five) ', () => {
        assert.equal(19, numberLetterCounts(5));
    });

    it('should contain 23 letters when on 342 (three hundred and forty-two) ', () => {
        assert.equal(23, numberLetterCounts(342));
    });

    it('should contain 20 letters when on 115 (one hundred and fifteen) ', () => {
        assert.equal(20, numberLetterCounts(115));
    });
});