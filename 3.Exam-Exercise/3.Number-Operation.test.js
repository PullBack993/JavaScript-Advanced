const numberOperations = require('./3. Number Operations_Resources')
const { expect } = require('chai')

describe('Test numberOperation', () => {
    it('Test powerNumber', () => {
        expect(numberOperations.powNumber(2)).to.be.equal(4)
        expect(numberOperations.powNumber(0.1)).to.be.equal(0.010000000000000002)
        expect(numberOperations.powNumber(0,0)).to.be.equal(0)
    })
    describe('Test numberCheckr', () => {
        it('Test input with invalid cases', () => {
            expect(() => numberOperations.numberChecker({})).to.throw(Error,'The input is not a number!')
            expect(() => numberOperations.numberChecker(undefined)).to.throw(Error,'The input is not a number!')
        })
        it('Test input with lower than 100 number', () => {
            expect(numberOperations.numberChecker(0)).be.be.equal('The number is lower than 100!')
            expect(numberOperations.numberChecker('0')).be.be.equal('The number is lower than 100!')
            expect(numberOperations.numberChecker(99)).be.be.equal('The number is lower than 100!')
            expect(numberOperations.numberChecker(-100)).be.be.equal('The number is lower than 100!')
        })
        it('Test input with greater or equal than 100', () => {
            let infoText = 'The number is greater or equal to 100!'
            expect(numberOperations.numberChecker(100)).be.be.equal(infoText)
            expect(numberOperations.numberChecker(101)).be.be.equal(infoText)
            expect(numberOperations.numberChecker('150')).be.be.equal(infoText)
        })
    })
    describe('Test sumArray', () => {
        it('Test first array longer and take second length', () => {
            expect(numberOperations.sumArrays([8,2], [1])).to.be.eql([9,2])
            expect(numberOperations.sumArrays([9,2], [1])).to.be.eql([10,2])
            expect(numberOperations.sumArrays(['a',2], [1])).to.be.eql(['a1',2])
            expect(numberOperations.sumArrays([1], ['a',2])).to.be.eql(['1a', 2])
            expect(numberOperations.sumArrays([1,2,2], ['0',2,9])).to.be.eql([ '10', 4, 11 ])
            expect(numberOperations.sumArrays([undefined], [1])).to.be.eql([ NaN ])
            expect(numberOperations.sumArrays([], [1,'a'])).to.be.eql([ 1, 'a' ])
        })
    })
})