const chai = require('chai');
const expect = chai.expect;

const GetNextDates = require('./index.js');

describe('GetNextDates(range, startDate)', function() {

  describe('valid range & Date object supplied', function(){
    it('should return the next date set to midnight', function() {

      expect( GetNextDates(9, new Date()).length )
        .to.equal(9);
      expect( GetNextDates(9, new Date(2000,0,1))[0] )
        .to.deep.equal(new Date(2000,0,2));
      expect( GetNextDates(9, new Date(2000,0,1))[8] )
        .to.deep.equal(new Date(2000,0,10));

    });
  });

  describe('valid range, non-Date object', function(){
    it("should throw an error", function() {

      expect( GetNextDates.bind(undefined, 1, 'string') )
        .to.throw(Error);
      expect( GetNextDates.bind(undefined, 1, []) )
        .to.throw(Error);
      expect( GetNextDates.bind(undefined, 1, null) )
        .to.throw(Error);
      expect( GetNextDates.bind(undefined, 1, function() {}) )
        .to.throw(Error);

    });
  });

  describe('valid range, invalid Date object', function(){
    it("should throw an error", function() {

      expect( GetNextDates.bind(undefined, 1, new Date('not a date string')) )
        .to.throw(Error);
      expect( GetNextDates.bind(undefined, 1, new Date(undefined)) )
        .to.throw(Error);
      expect( GetNextDates.bind(undefined, 1, new Date([])) )
        .to.throw(Error);

    });
  });

  describe('invalid range', function(){
    it("should throw an error", function() {

      expect( GetNextDates.bind(undefined, null) )
        .to.throw(Error);
      expect( GetNextDates.bind(undefined, -10) )
        .to.throw(Error);
      expect( GetNextDates.bind(undefined, null, new Date('not a date string')) )
        .to.throw(Error);

    });
  });

});