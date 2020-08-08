import { FortuneCookiePdf } from './../src/implementation/fortuneCookiePdf';
import { IFortuneCookie } from './../src/interface/fortuneCookie';
import { FortuneCookieHtml } from './../src/implementation/fortuneCookieHTML';
import { ISimpleFortune } from './../src/interface/simpleFortune';
import { DataManager } from './../src/data/dataManager';
import { expect } from 'chai';
import {describe, it, before} from 'mocha';
describe('Strategy Tests', function() {
    it('Can use DataManager', function() {
        const arr: Array<ISimpleFortune> = DataManager.getFortunes();
        arr.forEach(element => {
            console.log(element);
        });
        expect(arr).to.be.an('array');
    })

    it('Can init fortuneCookieHTML', function() {
        const fc: IFortuneCookie = new FortuneCookieHtml();
        console.log(fc); //just for giggles
        expect(fc.fortune).to.be.a('string');
        expect(fc.id).to.be.a('string');
    })

    it('Can init fortuneCookiePDF', function() {
        const fc: IFortuneCookie = new FortuneCookiePdf();
        console.log(fc); //just for giggles
        expect(fc.fortune).to.be.a('string');
        expect(fc.id).to.be.a('string');
    })

    it('Can init fortuneCookieText', function() {
        const fc: IFortuneCookie = new FortuneCookieHtml();
        console.log(fc); //just for giggles
        expect(fc.fortune).to.be.a('string');
        expect(fc.id).to.be.a('string');
    })
})