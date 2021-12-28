const isOddOrEven = require("./2.Even-Odd")
const {expect} = require("chai")

describe('Test odd or even', () => {
    it ('Test invalid type', () => {
        expect(isOddOrEven(1)).to.be.equal(undefined)
        expect(isOddOrEven([])).to.be.equal(undefined)
        expect(isOddOrEven({})).to.be.equal(undefined)
    })
    it ('Test odd length', () => {
        expect(isOddOrEven('a')).to.be.equal('odd')
    })
    it ('Test even length', () => {
        expect(isOddOrEven('ab')).to.be.equal('even')
    })

})