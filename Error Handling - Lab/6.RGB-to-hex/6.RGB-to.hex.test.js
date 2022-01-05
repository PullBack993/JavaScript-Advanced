const rgbToHexColor = require('../5.Check-for-Symmetry/6.RGB-to-hex')
const { expect } = require('chai')

describe('Test rgb', () => {
    it('Test with undefined input', () => {
        expect(rgbToHexColor(undefined, 1, 2)).to.be.equal(undefined)
        expect(rgbToHexColor(1, undefined, 2)).to.be.equal(undefined)
        expect(rgbToHexColor(1, 1, undefined)).to.be.equal(undefined)
    })
    it('Test with negative color number', () => {
        expect(rgbToHexColor(-1, 1, 1)).to.be.equal(undefined)
        expect(rgbToHexColor(1, -1, 1)).to.be.equal(undefined)
        expect(rgbToHexColor(-1, 1, -1)).to.be.equal(undefined)
    })
    it('Test with number more than 255', () => {
        expect(rgbToHexColor(256,1,1)).to.be.equal(undefined)
        expect(rgbToHexColor(1,256,1)).to.be.equal(undefined)
        expect(rgbToHexColor(1,1,256)).to.be.equal(undefined)
    })
    it('Test invalid type', () => {
        expect(rgbToHexColor('a', '{}', '[]')).to.be.equal(undefined)
    })
    it('Test(happy case)return the hex color', () => {
        expect(rgbToHexColor(1,1,1)).to.be.equal('#010101')
    })
    it('Test(happy case)with corner case 0', () => {
        expect(rgbToHexColor(0,0,0)).to.be.equal('#000000')
    })
    it('Test(happy case)with corner case 255', () => {
        expect(rgbToHexColor(255,255,255)).to.be.equal('#FFFFFF')
    })

})
