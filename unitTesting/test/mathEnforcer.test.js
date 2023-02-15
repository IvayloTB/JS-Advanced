const { expect } = require("chai");
const mathEnforcer = require("../mathEnforcer");

describe('Math Enforcer', () => {

    describe('addFive', () => {

        it('the input is not a number', () => {
            expect(mathEnforcer.addFive('s')).to.equal(undefined);
        })
        it('the input is not a number', () => {
            expect(mathEnforcer.addFive()).to.equal(undefined);
        })
        it('add five to given num', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10)
        })
        it('add five to given num', () => {
            expect(mathEnforcer.addFive(3.14)).closeTo(8.14, 0.01)
        })
        it('add five to given num', () => {
            expect(mathEnforcer.addFive(0.99)).to.equal(5.99)
        })
        it('add five to given num', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0)
        })
        it('add five to given num', () => {
            expect(mathEnforcer.addFive(-10.99)).closeTo(-5.99, 0.01)
        })
    })

    describe('substractTen', () => {
        it('the input is not a number', () => {
            expect(mathEnforcer.subtractTen('s')).to.equal(undefined);
        })
        it('the input is not a number', () => {
            expect(mathEnforcer.subtractTen()).to.equal(undefined);
        })
        it('substract ten to given num', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        })
        it('substract ten to given num', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        })
        it('substract ten to given num', () => {
            expect(mathEnforcer.subtractTen(100)).to.equal(90);
        })
        it('substract ten to given num', () => {
            expect(mathEnforcer.subtractTen(8.55)).closeTo(-1, 45, 0.01);
        })
        it('substract ten to given num', () => {
            expect(mathEnforcer.subtractTen(11.55)).closeTo(1.55, 0.01);
        })
        it('substract ten to given num', () => {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        })
    })

    describe('sum', () => {
        it('the input is not a number', () => {
            expect(mathEnforcer.sum('1', '2')).to.equal(undefined);
        })
        it('the input is not a number', () => {
            expect(mathEnforcer.sum(2, 's')).to.equal(undefined);
        })
        it('the input is not a number', () => {
            expect(mathEnforcer.sum('s', 1)).to.equal(undefined);
        })
        it('the input is not a number', () => {
            expect(mathEnforcer.sum()).to.equal(undefined);
        })
        it('returns correct sum', () => {
            expect(mathEnforcer.sum(-5.37, 10.75)).closeTo(5.38, 0.01)
        })
        it('returns correct sum', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10)
        })
        it('returns correct sum', () => {
            expect(mathEnforcer.sum(1.25, 2.25)).closeTo(3.50, 0.01)
        })
        it('returns correct sum', () => {
            expect(mathEnforcer.sum(5, -10)).to.equal(-5)
        })
        it('returns correct sum', () => {
            expect(mathEnforcer.sum(-15, 10)).to.equal(-5)
        })
        it('returns correct sum', () => {
            expect(mathEnforcer.sum(-15, -10)).to.equal(-25)
        })
        it('returns correct sum', () => {
            expect(mathEnforcer.sum(1.85, 2.25)).closeTo(4.1, 0.01)
        })
        it('returns correct sum', () => {
            expect(mathEnforcer.sum(1.8, 3.6)).closeTo(5.4, 0.01)
        })
        it('returns correct sum', () => {
            expect(mathEnforcer.sum(1.99, 10)).closeTo(11.99, 0.01)
        })
        it('returns correct sum', () => {
            expect(mathEnforcer.sum(1.99, -10)).closeTo(-8.01, 0.01)
        })

    })
})