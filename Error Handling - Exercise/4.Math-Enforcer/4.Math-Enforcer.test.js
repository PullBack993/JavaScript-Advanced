const mathEnforcer = require('./4.Math-Enforcer')
const {expect} = require('chai')


describe('mathEnforce' , () => {
    describe('Test addFire', () => {
        it('Test invalid input', () => {
            let input = mathEnforcer.addFive('1')
            let secondInput = mathEnforcer.addFive([])
            let thirdInput = mathEnforcer.addFive({})

            expect(input).to.be.equal(undefined)
            expect(secondInput).to.be.equal(undefined)
            expect(thirdInput).to.be.equal(undefined)
        })


        it('Test valid input', () => {
            let input = mathEnforcer.addFive(1)
            let secondInput = mathEnforcer.addFive(1.1)
            let thirdInput = mathEnforcer.addFive(-1)
            
            expect(input).to.be.equal(6)
            expect(secondInput).to.be.closeTo(6.1, 0.01)
            expect(thirdInput).to.be.equal(4)

        })
    })
    describe('Test subtractTen', () => {
        it('Test invalid input', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.equal(undefined)
            expect(mathEnforcer.subtractTen([])).to.be.equal(undefined)
            expect(mathEnforcer.subtractTen({})).to.be.equal(undefined)
            expect(mathEnforcer.subtractTen(undefined)).to.be.equal(undefined)

        })
        it('Test valid input', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0)
            expect(mathEnforcer.subtractTen(1.1)).to.be.closeTo(-8.9, 0.01)
            expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11)

        })
    })
    describe('Test sum', () => {
        it('Test invalid input', () => {
            expect(mathEnforcer.sum('1', 2)).to.be.equal(undefined)
            expect(mathEnforcer.sum(2, '1')).to.be.equal(undefined)
            expect(mathEnforcer.sum('1', {})).to.be.equal(undefined)
            expect(mathEnforcer.sum({}, 2)).to.be.equal(undefined)

        })
        it('Test valid input', () => {
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10)
            expect(mathEnforcer.sum(5, -5)).to.be.equal(0)
            expect(mathEnforcer.sum(-5, 5)).to.be.equal(0)
            expect(mathEnforcer.sum(0, 0)).to.be.equal(0)
            expect(mathEnforcer.sum(-1, -1)).to.be.equal(-2)
            expect(mathEnforcer.sum(1.1, 1.1)).to.be.closeTo(2.2, 0.01)
            expect(mathEnforcer.sum(1.1, 1)).to.be.closeTo(2.1, 0.01)
            expect(mathEnforcer.sum(1, 1.1)).to.be.closeTo(2.1, 0.01)

        })
    })
})