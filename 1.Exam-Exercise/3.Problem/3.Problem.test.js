const cinema = require("./3.Cinema");
const { expect } = require("chai");

describe("Tests …", function () {
  describe("Test showMovies function", function () {
    it("test with empty array", function () {
      expect(cinema.showMovies([])).to.be.equal("There are currently no movies to show.");
    });
    it("Test showMovies with correct cases", function () {
      expect(cinema.showMovies(['a', 'b', 'c'])).to.be.equal('a, b, c')
      expect(cinema.showMovies(['a'])).to.be.equal('a')
      
    })
  });
  describe("Test ticketPrice method", function () {
    it("Test throw error by wrong inputs", function () {
      expect(() => cinema.ticketPrice("asd")).to.throw(Error,"Invalid projection type.");
      expect(() => cinema.ticketPrice("a")).to.throw(Error,"Invalid projection type.");
      expect(() => cinema.ticketPrice("PREMIERE")).to.throw(Error,"Invalid projection type.");

      expect(() => cinema.ticketPrice(1.5)).to.throw(Error,"Invalid projection type.");
      expect(() => cinema.ticketPrice({})).to.throw(Error,"Invalid projection type.");
      expect(() => cinema.ticketPrice([])).to.throw(Error,"Invalid projection type.");
      expect(() => cinema.ticketPrice(false)).to.throw(Error,"Invalid projection type.");

    });
    it("Test valid inputs", function () {
      expect(cinema.ticketPrice('Premiere')).to.be.equal(12)
      expect(cinema.ticketPrice('Normal')).to.be.equal(7.50)
      expect(cinema.ticketPrice('Discount')).to.be.equal(5.50)
    });
  });
  describe('Test swapSeatsInHall method', function () {
    it('Test invalid inputs for first number', function(){
        let result = "Unsuccessful change of seats in the hall.";
        expect(cinema.swapSeatsInHall(21,1)).to.be.equal(result) // > 21 Number
        expect(cinema.swapSeatsInHall(0,1)).to.be.equal(result) //  with 0 
        expect(cinema.swapSeatsInHall('1', 1)).to.be.equal(result) // string
        expect(cinema.swapSeatsInHall(-1, 1)).to.be.equal(result) // negative number
        expect(cinema.swapSeatsInHall(0.9, 1)).to.be.equal(result) // number corner case
        expect(cinema.swapSeatsInHall(11, 11)).to.be.equal(result) // same number
        expect(cinema.swapSeatsInHall(11)).to.be.equal(result) // one number


      })
    it('Test invalid inputs for second number', function() {
      let result = "Unsuccessful change of seats in the hall.";
      expect(cinema.swapSeatsInHall(1,21)).to.be.equal(result) // > 21 Number
      expect(cinema.swapSeatsInHall(1,0)).to.be.equal(result) //  with 0 
      expect(cinema.swapSeatsInHall(1, '1')).to.be.equal(result) // string
      expect(cinema.swapSeatsInHall(1, -1)).to.be.equal(result) // negative number
      expect(cinema.swapSeatsInHall(1, 0.9)).to.be.equal(result) // number corner case
    })
    it('Test valid inputs', function() {
      let result = "Successful change of seats in the hall."
      expect(cinema.swapSeatsInHall(20,19)).to.be.equal(result) // number corner case
      expect(cinema.swapSeatsInHall(1, 2)).to.be.equal(result)
      expect(cinema.swapSeatsInHall(19,20)).to.be.equal(result) // number corner case



   
    })
  })
});
