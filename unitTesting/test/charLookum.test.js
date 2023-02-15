const { expect } = require("chai");
const lookupChar = require("../charLookUp.js");

describe ('lookupChar', () =>{

    it('isString/index', ()=>{
        expect(lookupChar(4, 'd')).to.equal(undefined)
    })
    it('isString/index', ()=>{
        expect(lookupChar('asd', 's')).to.equal(undefined)
    })
    it('isString/index', ()=>{
        expect(lookupChar(4, 4)).to.equal(undefined)
    })
    it('isString/index', ()=>{
        expect(lookupChar('asd', 1.5)).to.equal(undefined)
    })

    it('invalid index', () => {
        expect(lookupChar('stringi', 7)).to.equal("Incorrect index")
    })
    it('invalid index', () => {
        expect(lookupChar('string', -1)).to.equal("Incorrect index")
    })
    it('invalid index', () => {
        expect(lookupChar('string', 15)).to.equal("Incorrect index")
    })

    it('correct char', () => {
        expect(lookupChar('string',0)).to.equal('s');
    })

    it('correct char2', () => {
        expect(lookupChar('asdfg',3)).to.equal('f');
    })

    it('correct char', () => {
        expect(lookupChar('pesho',4)).to.equal('o');
    })

    it('correct char', () => {
        expect(lookupChar('atanas',1)).to.equal('t');
    })

    it('correct char', () => {
        expect(lookupChar('Incorect',6)).to.equal('c');
    })

})