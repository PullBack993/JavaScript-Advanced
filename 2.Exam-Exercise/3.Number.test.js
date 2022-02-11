const testNumbers = require("./testNumbers");
const { expect } = require("chai");

describe("Test testNumbers", function () {
  describe("Test sumNbers", function () {
    it("Test valid inputs", function () {
      expect(testNumbers.sumNumbers(1, 1)).to.be.equal("2.00");
      expect(testNumbers.sumNumbers(0.1, 2)).to.be.equal("2.10")
      expect(testNumbers.sumNumbers(1,1.1)).to.be.equal('2.10')
      expect(testNumbers.sumNumbers(0.1,0.1)).to.be.equal('0.20')
      expect(testNumbers.sumNumbers(1,-1)).to.be.equal('0.00')


    });
    it("Test invalid inputs", function () {
      expect(testNumbers.sumNumbers('1', 1)).to.be.equal(undefined);
      expect(testNumbers.sumNumbers(1, '1')).to.be.equal(undefined);
      expect(testNumbers.sumNumbers({}, 1)).to.be.equal(undefined);
      expect(testNumbers.sumNumbers(1, [])).to.be.equal(undefined);
      expect(testNumbers.sumNumbers(false, 1)).to.be.equal(undefined);
    })
  });
  describe("Test NumberChecker",function () {
    it('Test check if the number is number,invalid inputs', function () {
        expect(() => testNumbers.numberChecker({1:'1'})).to.throw(Error,"The input is not a number!")
        expect(() => testNumbers.numberChecker(undefined)).to.throw(Error,"The input is not a number!")  
    })
    it('Test with even numbers,valid inputs', () => {
        expect(testNumbers.numberChecker([])).to.be.equal("The number is even!")
        expect(testNumbers.numberChecker(0)).to.be.equal("The number is even!")
        expect(testNumbers.numberChecker(2)).to.be.equal("The number is even!")
        expect(testNumbers.numberChecker('4')).to.be.equal("The number is even!")
        expect(testNumbers.numberChecker(6)).to.be.equal("The number is even!")
    })
    it ('Test with odd numbers,valid inputs', () => {
        expect(testNumbers.numberChecker(1)).to.be.equal("The number is odd!")
        expect(testNumbers.numberChecker(0.1)).to.be.equal("The number is odd!")
        expect(testNumbers.numberChecker('0.2')).to.be.equal("The number is odd!")
        expect(testNumbers.numberChecker('3')).to.be.equal("The number is odd!")
    })
  })
  describe('Test averageSumArray', () => {
    it('Test calculate averageSumArray', () => {
        expect(testNumbers.averageSumArray([1,2,3,4,5])).to.be.equal(3)
        expect(testNumbers.averageSumArray([0.1,4,5])).to.be.equal(3.033333333333333)
        expect(testNumbers.averageSumArray([2])).to.be.equal(2)
        expect(testNumbers.averageSumArray([0])).to.be.equal(0)
    })
  })
});
