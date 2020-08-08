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
import * as path from 'path';
import * as fs from 'fs';
describe('Strategy Tests', function() {
    it('Can can create PDF FortuneCookie from Factory and print', async  function() {
        process.env.FORTUNES_PDF_PATH = path.join(__dirname, 'pdfs')
        
        const factory: IFortuneCookieFactory = new FortuneCookieFactory();
        const fc: IFortuneCookie = factory.getFortuneCookie(RenderType.PDF);
        expect(fc).to.be.an('object');
        const status: IPrintStatus = await fc.print();
        console.log(`The path to the PDF is ${status.message}`);
        expect(status.statusCode).to.equal(200);
        expect(fs.existsSync(status.message)).to.equal(true);
        //clean up
        try {
            fs.rmdirSync(process.env.FORTUNES_PDF_PATH, { recursive: true });
            console.log(`${process.env.FORTUNES_PDF_PATH} is deleted!`);
        } catch (err) {
            console.error(`Error while deleting ${process.env.FORTUNES_HTML_PATH} because of ${err.message}.`);
        }
    });

    it('Can can create HTML FortuneCookie from Factory and print', async function() {
        process.env.FORTUNES_HTML_PATH = path.join(__dirname, 'html')
        const factory: IFortuneCookieFactory = new FortuneCookieFactory();
        const fc: IFortuneCookie = factory.getFortuneCookie(RenderType.HTML);
        expect(fc).to.be.an('object');
        const status: IPrintStatus = await fc.print();
        expect(status.statusCode).to.equal(200);
        //clean up
        try {
            fs.rmdirSync(process.env.FORTUNES_HTML_PATH, { recursive: true });
            console.log(`${process.env.FORTUNES_HTML_PATH} is deleted!`);
        } catch (err) {
            console.error(`Error while deleting ${process.env.FORTUNES_HTML_PATH} because of ${err.message}.`);
        }
    });

    it('Can can create TEXT FortuneCookie from Factory and print', async function() {
        process.env.FORTUNES_TEXT_PATH = path.join(__dirname, 'text')
        const factory: IFortuneCookieFactory = new FortuneCookieFactory();
        const fc: IFortuneCookie = factory.getFortuneCookie(RenderType.TEXT);
        expect(fc).to.be.an('object');
        const status: IPrintStatus = await fc.print();
        expect(status.statusCode).to.equal(200);
        //clean up
        try {
            fs.rmdirSync(process.env.FORTUNES_TEXT_PATH, { recursive: true });
            console.log(`${process.env.FORTUNES_TEXT_PATH} is deleted!`);
        } catch (err) {
            console.error(`Error while deleting ${process.env.FORTUNES_TEXT_PATH} because of ${err.message}.`);
        }
        
    });
})