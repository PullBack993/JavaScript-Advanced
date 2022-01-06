const createCalculator = require ('../7.Add-Subtract')
const {expect} = require('chai')


describe('Test create calculator function', () => {
    it('Test check createCalculator obj ', () => {
        expect(typeof(createCalculator())).to.equal('object')
    })
    it('Test check add function ', () => {
        expect(typeof(createCalculator().add)).to.equal('function')
    })
    it('Test add function whether add corect value(positiv,negative,zero,string)', () => {
        let calc = createCalculator()
        calc.add(1)
        expect(calc.get()).to.be.equal(1)
        calc.add(-1)
        expect(calc.get()).to.be.equal(0)
        calc.add(0)
        expect(calc.get()).to.be.equal(0)
        calc.add('1')
        expect(calc.get()).to.be.equal(1)

    })
     it('Test subtract function whether subtract corect value(positiv,negative,zero,string)', () => {
        let calc = createCalculator()
        calc.subtract(1)
        expect(calc.get()).to.be.equal(-1)
        calc.subtract(-1)
        expect(calc.get()).to.be.equal(0)
        calc.subtract(0)
        expect(calc.get()).to.be.equal(0)
        calc.subtract('1')
        expect(calc.get()).to.be.equal(-1)

    })
    it('Test check subtract function ', () => {
        expect(typeof(createCalculator().subtract)).to.equal('function')
    })
})
