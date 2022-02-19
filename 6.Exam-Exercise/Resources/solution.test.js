let { Repository } = require("./solution");
const { expect } = require('chai')

describe("Tests class Repository", function () {
    describe("Test consturctor with add function", function () {
        it("test add function", function () {
              let r = new Repository(1)
            expect(r.add(0)).to.be.equal(0)
            expect(r.add(1)).to.be.equal(1)
        });
    });
    describe('Test getId method', function () {
        it('invalid input', () => {
            let r = new Repository(1)
            expect(() => r.getId(123)).to.throw(Error)
            expect(() => r.getId(2)).to.throw(Error)
        })
        it('test with valid input', () => {
            let r = new Repository(1)
            r.add(0)
            expect(r.getId(0)).to.be.equal(0)

        })
    })
    describe('Test update method', () => {
        it('test invalid inputs', () => {
            let r = new Repository(1)
            expect(() => r.update(2)).to.throw(Error)
            expect(() => r.update('a')).to.throw(Error)
        })
        it('test valid inputs', () => {
            let r = new Repository(1)
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7),
              };
            r.add(entity)
            


        })
    })
});
