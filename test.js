var memoize = require("./"),
    expect = require('chai').expect;

it('returns memoized version of a function', function(){

  var cached, memoized;

  cached   = [];
  memoized = memoize(work);

  expect(memoized(10)).to.equal(20);
  expect(memoized(10)).to.equal(20);
  expect(memoized(10)).to.equal(20);

  expect(memoized(20)).to.equal(30);
  expect(memoized(20)).to.equal(30);
  expect(memoized(20)).to.equal(30);

  function work(n){
    expect(cached).to.not.include(n);
    cached.push(n);
    return n + 10;
  }

});

it('takes a hasher function optionally', function(){

  var cached, memoized;

  cached   = [];
  memoized = memoize(work, hasher);

  expect(memoized('hello', 'world')).to.equal('hello, world');
  expect(memoized('hello', 'world')).to.equal('hello, world');
  expect(memoized('hello', 'kitty')).to.equal('hello, kitty');
  expect(memoized('hello', 'kitty')).to.equal('hello, kitty');

  function hasher(first, last){
    return first + ', ' + last;
  }

  function work(first, last){

    var result = first + ', ' + last;

    expect(cached).to.not.include(result);

    cached.push(result);

    return result;
  }

});
