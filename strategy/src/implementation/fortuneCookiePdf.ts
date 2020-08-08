import { IFortuneCookie } from './../interface/fortuneCookie';
import { ISimpleFortune } from './../interface/simpleFortune';
import { IPrintStatus } from './../interface/printStatus';
import { FortuneCookieBase } from './../base/fortuneCookie'
import { PdfPrinter } from './pdfPrinter';
export class FortuneCookiePdf extends FortuneCookieBase implements IFortuneCookie{
    async print(): Promise<IPrintStatus>{
        const printer = new PdfPrinter();
        const fortune: ISimpleFortune = {id: this.id, fortune: this.fortune};
        return await printer.print(fortune);
    }
}