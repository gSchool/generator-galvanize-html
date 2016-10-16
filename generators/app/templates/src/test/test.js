(function() {

  /* jshint ignore:start */

  'use strict';

  const expect = chai.expect;
  // var should = chai.should();

  // sample!
  describe('Compare Numbers', () => {
    it('1 should equal 1', () => {
      expect(1).to.equal(1);
    });
  });

  describe('sum(1, 2)', () => {
    it('should equal 3', () => {
      expect(sum(1, 2)).to.equal(3);
    });
  });

  /* jshint ignore:end */

}());
