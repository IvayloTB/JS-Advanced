const { expect } = require("chai");
const isOddOrEven = require('../EvenOrOdd.js')
    describe ('isOddOrIven', () => {

        it ('isString' , () => {
            expect(isOddOrEven(3)).to.undefined
        })

        it('isOdd', () => {
            expect(isOddOrEven('s')).to.equal('odd');
        })

        it('isEven', () =>{
            expect(isOddOrEven('da')).to.equal('even');

        })

    })