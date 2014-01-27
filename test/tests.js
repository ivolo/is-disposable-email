
try {
  var disposable = require('is-disposable-email');
} catch (e) {
  var disposable = require('..');
}

var assert = require('assert');

describe('is-disposable-email', function () {

  it('should detect disposable emails', function () {
    assert(disposable('asdsakdjad@mailinator.com'));
    assert(disposable('asdsakdjad+2892@mailinator.com'));
    assert(disposable('normal@email60.com'));
  });

  it('should not detect personal emails', function () {
    assert(!disposable('ivolodarsky@gmail.com'));
    assert(!disposable('mike@gmail.com'));
  });

  it('should not detect fake emails', function () {
    assert(!disposable('asdsakdjad@woo.com'));
  });

  it('should not detect company emails', function () {
    assert(!disposable('ilya@segment.io'));
    assert(!disposable('bill.lumbergh@initech.com'));
  });
});