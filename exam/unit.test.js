const assert = require("chai").assert;
const findNewApartment = require("./findApartment");

describe("Tests …", function () {

    describe("isGoodLocation", function () {
        it('incorect par', function () {
            assert.throw(() => findNewApartment.isGoodLocation('Sofia', 'true'), 'Invalid input!')
            assert.throw(() => findNewApartment.isGoodLocation(true, 'Sofia'), 'Invalid input!')
            assert.throw(() => findNewApartment.isGoodLocation('Sofia', 'false'), 'Invalid input!')
            assert.throw(() => findNewApartment.isGoodLocation(1, 'true'), 'Invalid input!')
            assert.throw(() => findNewApartment.isGoodLocation('Sofia', 1), 'Invalid input!')
            assert.throw(() => findNewApartment.isGoodLocation(false, true), 'Invalid input!')
            assert.throw(() => findNewApartment.isGoodLocation('Sofia', 'Sofia'), 'Invalid input!')
            assert.throw(() => findNewApartment.isGoodLocation('false', 'Sofia'), 'Invalid input!')
        });

        it('incorect city', () => {
            assert.equal(findNewApartment.isGoodLocation('Burgas', true), 'This location is not suitable for you.')
            assert.equal(findNewApartment.isGoodLocation('Sliven', true), 'This location is not suitable for you.')
            assert.equal(findNewApartment.isGoodLocation('Petrich', false), 'This location is not suitable for you.')
            assert.equal(findNewApartment.isGoodLocation('Pernik', false), 'This location is not suitable for you.')
        })

        it('no transport', () => {
            assert.equal(findNewApartment.isGoodLocation('Sofia', false), 'There is no public transport in area.')
            assert.equal(findNewApartment.isGoodLocation('Varna', false), 'There is no public transport in area.')
            assert.equal(findNewApartment.isGoodLocation('Plovdiv', false), 'There is no public transport in area.')
        })

        it('is correct', () => {
            assert.equal(findNewApartment.isGoodLocation('Sofia', true), 'You can go on home tour!')
            assert.equal(findNewApartment.isGoodLocation('Varna', true), 'You can go on home tour!')
            assert.equal(findNewApartment.isGoodLocation('Plovdiv', true), 'You can go on home tour!')
        })

    });

    describe("isLargeEnough", function () {
        it('throw error', () => {
            assert.throw(() => findNewApartment.isLargeEnough([], 2), 'Invalid input!')
            assert.throw(() => findNewApartment.isLargeEnough(2, [20, 40]), 'Invalid input!')
            assert.throw(() => findNewApartment.isLargeEnough(3, []), 'Invalid input!')
            assert.throw(() => findNewApartment.isLargeEnough(20, 2), 'Invalid input!')
            assert.throw(() => findNewApartment.isLargeEnough([], '2'), 'Invalid input!')
            assert.throw(() => findNewApartment.isLargeEnough('20', 2), 'Invalid input!')
            assert.throw(() => findNewApartment.isLargeEnough([20, 40, 60], '120'), 'Invalid input!')
            assert.throw(() => findNewApartment.isLargeEnough([20, 40, 60], '10'), 'Invalid input!')
        })

        it('correct input', ()=>{
            assert.equal(findNewApartment.isLargeEnough([10,20,30], 20),'20, 30')
            assert.equal(findNewApartment.isLargeEnough([10,20,30], 9),'10, 20, 30')
            assert.equal(findNewApartment.isLargeEnough([10,20,30], 200),'')
            assert.equal(findNewApartment.isLargeEnough([10,20,30], 30),'30')
        })
    })

    describe('isItAffordable', function (){
        it('throw error', () =>{
            assert.throw(() => findNewApartment.isItAffordable(0, 0), 'Invalid input!')
            assert.throw(() => findNewApartment.isItAffordable(-1, -1), 'Invalid input!')
            assert.throw(() => findNewApartment.isItAffordable('2', 3), 'Invalid input!')
            assert.throw(() => findNewApartment.isItAffordable(2, '3'), 'Invalid input!')
            assert.throw(() => findNewApartment.isItAffordable('2', '3'), 'Invalid input!')
            assert.throw(() => findNewApartment.isItAffordable(-1,9), 'Invalid input!')
        })

        it('dont have money ', ()=>{
            assert.equal(findNewApartment.isItAffordable(20,19),"You don't have enough money for this house!")
            assert.equal(findNewApartment.isItAffordable(200,20),"You don't have enough money for this house!")
            assert.equal(findNewApartment.isItAffordable(10,9),"You don't have enough money for this house!")
            assert.equal(findNewApartment.isItAffordable(20,1),"You don't have enough money for this house!")
        })

        it('enaught money', ()=>{
            assert.equal(findNewApartment.isItAffordable(20,20),"You can afford this home!")
            assert.equal(findNewApartment.isItAffordable(20,23),"You can afford this home!")
            assert.equal(findNewApartment.isItAffordable(200,300),"You can afford this home!")
            assert.equal(findNewApartment.isItAffordable(20,100),"You can afford this home!")

        })


    })
});








//it('category A', () => {
//    assert.equal(motorcycleRider.licenseRestriction('A'), "No motorcycle restrictions, and the minimum age is 24.")
//})
//it('throw error', () => {
//    assert.throw(() => motorcycleRider.licenseRestriction(""), 'Invalid Information!')
//})