import { ISimpleFortune } from './../interface/simpleFortune';
import { IPrintStatus } from './../interface/printStatus';
import { IFortuneCookie } from './../interface/fortuneCookie';
import { FortuneCookieBase } from './../base/fortuneCookie'
import { TextPrinter } from './textPrinter';
export class FortuneCookieText extends FortuneCookieBase implements IFortuneCookie{
    print(): IPrintStatus{
        const printer = new TextPrinter();
        const fortune: ISimpleFortune = {id: this.id, fortune: this.fortune};
        return printer.print(fortune);
    }
}