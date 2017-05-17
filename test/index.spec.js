const assert = require('assert');

describe('Test Suite', function() {
    it('should contain 23 letters when on 342 (three hundred and forty-two) ', () => {
        assert.equal(23, containsNumberOfLetters(342));
    });

    it('should contain 20 letters when on 115 (one hundred and fifteen) ', () => {
        assert.equal(2, containsNumberOfLetters(115));
    });
});