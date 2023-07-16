const assert = require("chai").assert;
const motorcycleRider = require("../MotorcycleRider");

describe('MotorcycleRider', () => {

  //describe('licenseRestriction', () => {
  it('exepts AM', () => {
    assert.equal(motorcycleRider.licenseRestriction('AM'), 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
  })
  it('category A1', () => {
    assert.equal(motorcycleRider.licenseRestriction('A1'), "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
  })
  it('category A2', () => {
    assert.equal(motorcycleRider.licenseRestriction('A2'), "Motorcycles with maximum power of 35KW. and the minimum age is 18.")
  })
  it('category A', () => {
    assert.equal(motorcycleRider.licenseRestriction('A'), "No motorcycle restrictions, and the minimum age is 24.")
  })

  it('throw error', () => {
    assert.throw(() => motorcycleRider.licenseRestriction(""),'Invalid Information!')
  })
  it('throw error2', () => {
    assert.throw(() => motorcycleRider.licenseRestriction(),"Invalid Information!")
  })
  it('throw error3', () => {
    assert.throw(() => motorcycleRider.licenseRestriction("A3"),"Invalid Information!")
  })
  it('throw error3', () => {
    assert.throw(() => motorcycleRider.licenseRestriction("MM"), "Invalid Information!")
  })

  describe('motorcycleShowroom' ,() => {
    it('')
  })

})


//})

//it('category A1', ()=>{
    //expect(motorcycleRider('A1')).to.equal('')
//})