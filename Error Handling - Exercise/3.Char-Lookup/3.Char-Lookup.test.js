const lookupChar = require('./3.Char-Lookup')
const {expect} = require('chai')

describe ('Test lookupChar function', () => {
    it ('Test invalid type', () => {
        expect(lookupChar(1, 1)).to.be.equal(undefined)
        expect(lookupChar('a', 'a')).to.be.equal(undefined)
        expect(lookupChar(1, 'a')).to.be.equal(undefined)
        expect(lookupChar('a', 1.1)).to.be.equal(undefined)

    })
    it('Test incorrect index', () => {
        expect(lookupChar('a', 2)).to.be.equal('Incorrect index')
        expect(lookupChar('a', -1)).to.be.equal('Incorrect index')


    })
    it('Test happy case', () => {
        expect(lookupChar('abc', 1)).to.be.equal('b')
        expect(lookupChar('abc', 0)).to.be.equal('a')
        expect(lookupChar('abc', 2)).to.be.equal('c')


    })
})