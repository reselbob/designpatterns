import { IPrintStatus } from './../interface/printStatus';
import { IFortuneCookie } from './../interface/fortuneCookie';
import { FortuneCookieBase } from './../base/fortuneCookie'
import { HtmlPrinter } from './htmlPrinter';
export class FortuneCookieHtml extends FortuneCookieBase implements IFortuneCookie {
    print(): IPrintStatus{
        const printer = new HtmlPrinter();
        return printer.print(Buffer.from(this.fortune));
    }
}