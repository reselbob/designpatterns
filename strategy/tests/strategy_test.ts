import { IPrintStatus } from './../src/interface/printStatus';
import { IFortuneCookieFactory } from './../src/interface/fortuneCookieFactory';
import { RenderType } from '../src/enum/renderType';
import { FortuneCookiePdf } from './../src/implementation/fortuneCookiePdf';
import { IFortuneCookie } from './../src/interface/fortuneCookie';
import { FortuneCookieHtml } from './../src/implementation/fortuneCookieHTML';
import { FortuneCookieText } from './../src/implementation/fortuneCookieText';
import { expect } from 'chai';
import {describe, it, before} from 'mocha';
import { FortuneCookieFactory } from '../src/implementation/fortuneCookieFactory';

describe('Strategy Tests', function() {
    it('Can can create PDF FortuneCookie from Factory and print', function() {
        const factory: IFortuneCookieFactory = new FortuneCookieFactory();
        const fc: IFortuneCookie = factory.getFortuneCookie(RenderType.PDF);
        expect(fc).to.be.an('object');
        const status: IPrintStatus = fc.print();
        expect(status.statusCode).to.equal(200);
    });

    it('Can can create HTML FortuneCookie from Factory and print', function() {
        const factory: IFortuneCookieFactory = new FortuneCookieFactory();
        const fc: IFortuneCookie = factory.getFortuneCookie(RenderType.HTML);
        expect(fc).to.be.an('object');
        const status: IPrintStatus = fc.print();
        expect(status.statusCode).to.equal(200);
    });

    it('Can can create TEXT FortuneCookie from Factory and print', function() {
        const factory: IFortuneCookieFactory = new FortuneCookieFactory();
        const fc: IFortuneCookie = factory.getFortuneCookie(RenderType.TEXT);
        expect(fc).to.be.an('object');
        const status: IPrintStatus = fc.print();
        expect(status.statusCode).to.equal(200);
    });
})