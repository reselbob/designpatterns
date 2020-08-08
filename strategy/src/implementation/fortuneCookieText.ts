import { IPrintStatus } from './../interface/printStatus';
import { IFortuneCookie } from './../interface/fortuneCookie';
import { FortuneCookieBase } from './../base/fortuneCookie'
import { TextPrinter } from './textPrinter';
export class FortuneCookieText extends FortuneCookieBase implements IFortuneCookie{
    print(): IPrintStatus{
        const printer = new TextPrinter();
        return printer.print(Buffer.from(this.fortune));
    }
}