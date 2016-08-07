var expect = chai.expect;
// var should = chai.should();

// sample!
describe('Compare Numbers', function() {
  it('1 should equal 1', function() {
    expect(1).to.equal(1);
  });
});

describe('sum(1, 2)', function() {
  it('should equal 3', function() {
    expect(sum(1, 2)).to.equal(3);
  });
});
