const sum = require('./sumOfNum')
const {expect} = require('chai')


describe ('Sum of numbers', () => {
    it('Should be equal to 3', () => {
        expect(sum([1,2])).to.be.equal(3)
    });

    it('Should add positiv num with str', () => {
        expect(sum([1,'2'])).to.be.equal(3)
    })



})