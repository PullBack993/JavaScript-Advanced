const library = require('./library')
const { expect } = require('chai')


describe("Test library", function () {
    describe("Test calcPriceOfBook", function () {
      it("Test invalid inputs", function () {
        expect(() =>library.calcPriceOfBook(1, 1)).to.throw(Error);
        expect(() =>library.calcPriceOfBook([], 1)).to.throw(Error);
        expect(() =>library.calcPriceOfBook({}, 1)).to.throw(Error);
        expect(() =>library.calcPriceOfBook('asd', 'a')).to.throw(Error);
        expect(() =>library.calcPriceOfBook('asd', 1.1)).to.throw(Error);
        expect(() =>library.calcPriceOfBook('asd', false)).to.throw(Error);
        expect(() =>library.calcPriceOfBook('asd', {})).to.throw(Error);
        expect(() =>library.calcPriceOfBook('asd', [])).to.throw(Error);





      });
      it("Test valid inputs", function () {
        expect(library.calcPriceOfBook('asd', 1980)).to.be.equal('Price of asd is 10.00');
        expect(library.calcPriceOfBook('asd', 1979)).to.be.equal('Price of asd is 10.00');
       
        expect(library.calcPriceOfBook('asd', 1981)).to.be.equal('Price of asd is 20.00');
        expect(library.calcPriceOfBook('asd', 2000)).to.be.equal('Price of asd is 20.00');
      });
    });
    describe("Test findBook", function () {
      it("Test invalid inputs", function () {
        expect(() => library.findBook([], 'asd')).to.throw(Error)
        expect(() => library.findBook({}, 'asd')).to.throw(Error)
        expect(() => library.findBook('a', 'asd')).to.throw(Error)
        expect(() => library.findBook(1, 'asd')).to.throw(Error)

        expect(library.findBook(['judge'], 'asd')).to.be.equal('The book you are looking for is not here!')
        expect(library.findBook(['judge'], 'a')).to.be.equal('The book you are looking for is not here!')
        expect(library.findBook(['asd'], 'asd')).to.be.equal('We found the book you want.')
      })
    })
    describe("Test arrangeTheBooks",() => {
        it('Test invalid inputs', () => {
            expect(() =>library.arrangeTheBooks(1.1)).to.throw(Error)
            expect(() =>library.arrangeTheBooks(0.1)).to.throw(Error)
            expect(() =>library.arrangeTheBooks(-1)).to.throw(Error)
        })
        it('Test valid inputs',() => {
            expect(library.arrangeTheBooks(45)).to.be.equal("Insufficient space, more shelves need to be purchased.")
            expect(library.arrangeTheBooks(46)).to.be.equal("Insufficient space, more shelves need to be purchased.")

            expect(library.arrangeTheBooks(1)).to.be.equal("Great job, the books are arranged.")
            expect(library.arrangeTheBooks(39)).to.be.equal("Great job, the books are arranged.")
            expect(library.arrangeTheBooks(40)).to.be.equal("Great job, the books are arranged.")
        })

    })
});