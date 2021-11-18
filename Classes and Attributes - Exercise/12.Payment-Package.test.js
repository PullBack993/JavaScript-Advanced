const PaymentPackage = require("./12.Payment-Package");
const { expect} = require("chai");

describe("Test class playment package", () => {
  it("Test class constructor with invalid input", () => {
    expect(() => new PaymentPackage(1, 1)).to.throw(Error);
    expect(() => new PaymentPackage("", 1)).to.throw(Error);
    expect(() => new PaymentPackage({}, 1)).to.throw(Error);
    expect(() => new PaymentPackage([], 1)).to.throw(Error);


    expect(() => new PaymentPackage("1.1", "1")).to.throw(Error);
    expect(() => new PaymentPackage("z", "")).to.throw(Error);
    expect(() => new PaymentPackage("1", -1)).to.throw(Error);
    expect(() => new PaymentPackage("1", [])).to.throw(Error);
    expect(() => new PaymentPackage("1", {})).to.throw(Error);

  });

  it('Test with constructor with valid value', () => {
      let pp = new PaymentPackage('a', 0)
      expect(pp._value).to.be.equal(0)
  })
  it("Test default value with default settings", () => {
    let pp = new PaymentPackage("name", 1);
    expect(pp._VAT).to.be.equal(20);
    expect(pp._active).to.be.equal(true);
  });

  it("Test VAT with invalid values", () => {
    let pp = new PaymentPackage("a", 1);
    expect(() => pp._VAT(-1)).to.throw(Error);
    expect(() => pp._VAT("")).to.throw(Error);
    expect(() => pp._VAT(0)).to.throw(Error);
  });
  it("Test 'active' with invalid values", () => {
    let pp = new PaymentPackage("a", 1);
    expect(() => pp.active(1)).to.throw(Error);
    expect(() => pp.active("")).to.throw(Error);
    expect(() => pp.active("1")).to.throw(Error);
    expect(() => pp.active({})).to.throw(Error);
    expect(() => pp.active([])).to.throw(Error);
  });
  it("Test toString function with default values", () => {
    let pp = new PaymentPackage("a", 1);
    let result = "Package: a\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2";
    expect(pp.toString()).to.be.equal(result);
  });
  it("Test toString function with another values", () => {
    let pp = new PaymentPackage("a", 1);
    pp._active = false
    let result = 'Package: a (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2'; 
    expect(pp.toString()).to.be.equal(result);
  });
  it('asd', () => {
    let pp = new PaymentPackage("a", 1);
    pp._active = false
    pp._VAT = 1
    let result =  'Package: a (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 1%): 1.01'
    expect((pp.toString())).to.be.equal(result)

  })
});
