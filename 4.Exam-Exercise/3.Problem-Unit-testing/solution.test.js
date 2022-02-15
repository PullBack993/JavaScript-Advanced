const dealership = require('./solution')
const {expect} = require('chai')



describe("Tests delership", function() {
     it("Test newCarCost", function() {
        expect(dealership.newCarCost('Audi A4 B8', 10)).to.be.equal(-14990)
        expect(dealership.newCarCost('Audi A6 4K', 10)).to.be.equal(-19990)
        expect(dealership.newCarCost('m', 10)).to.be.equal(10)
    });
    it("Test carEquipment", () => {
        expect(dealership.carEquipment(['a','b'], [0,1])).to.be.eql([ 'a', 'b' ])
        expect(dealership.carEquipment(['a','b'], [0])).to.be.eql([ 'a'])
        expect(dealership.carEquipment(['a'], [0])).to.be.eql([ 'a'])
    })
    it('Test euroCategory', () => {
        expect(dealership.euroCategory(4)).to.be.equal('We have added 5% discount to the final price: 14250.')
        expect(dealership.euroCategory(3)).to.be.equal('Your euro category is low, so there is no discount from the final price!')
        expect(dealership.euroCategory(5)).to.be.equal('We have added 5% discount to the final price: 14250.')

    })

});

