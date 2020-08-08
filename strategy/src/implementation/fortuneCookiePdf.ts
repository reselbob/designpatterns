import { IPrintStatus } from './../interface/printStatus';
import { IFortuneCookie } from './../interface/fortuneCookie';
import { FortuneCookieBase } from './../base/fortuneCookie'
import { PdfPrinter } from './pdfPrinter';
export class FortuneCookiePdf extends FortuneCookieBase implements IFortuneCookie{
    print(): IPrintStatus{
        const printer = new PdfPrinter();
        return printer.print(Buffer.from(this.fortune));
    }
}