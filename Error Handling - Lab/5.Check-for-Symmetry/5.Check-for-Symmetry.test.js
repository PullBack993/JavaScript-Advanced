const { expect } = require("chai");
const isSymmetric = require("./5.Check-for-Symmetry");

describe(`Test symmetric array`, () => {
  it(`Should pass when array is symmetric provided`, () => {
    expect(isSymmetric([1, 1])).to.equal(true)
  })
  it(`Should false when array is not symmetric provided`, () => {
    expect(isSymmetric([0, 1])).to.equal(false)
  })
  it(`Should fail when another-type is provided`, () => {
    expect(isSymmetric('')).to.equal(false)
  })
  it(`Should pass when  odd array is symmetric provided`, () => {
    expect(isSymmetric([1, 1, 1])).to.equal(true);
  })
  it(`Should fail when incorrect arraytype is provided`, () => {
    expect(isSymmetric([1, '1'])).to.equal(false);
  })
});