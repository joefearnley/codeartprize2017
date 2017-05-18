'use strict';

const assert = require('assert');
const numberLetterCounts = require('../number-letter-counts');

describe('Test Suite', function() {
    it('should contain 19 letters when given 5 (five) ', () => {
        assert.equal(19, numberLetterCounts(5));
    });
    
    it('should contain 36 letters when on 9 (nine) ', () => {
        assert.equal(36, numberLetterCounts(9));
    });

    it('should contain 106 letters when on 19 (nineteen) ', () => {
        assert.equal(106, numberLetterCounts(19));
    });

    it('should contain 854 letters when on 99 (ninety-nine) ', () => {
        assert.equal(854, numberLetterCounts(99));
    });

    it('should contain 20259 letters when on 999 (nine hundred ninety-nine) ', () => {
        assert.equal(20259 , numberLetterCounts(1000));
    });

    it('should contain 21124 letters when on 1000 (one thousand) ', () => {
        assert.equal(21124 , numberLetterCounts(1000));
    });
    
});