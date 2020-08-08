import { IPrintStatus } from './../interface/printStatus';
import { IFortuneCookie } from './../interface/fortuneCookie';
import { FortuneCookieBase } from './../base/fortuneCookie'
import { HtmlPrinter } from './htmlPrinter';
import { ISimpleFortune } from '../interface/simpleFortune';

export class FortuneCookieHtml extends FortuneCookieBase implements IFortuneCookie {
    async print(): Promise<IPrintStatus>{
        const printer = new HtmlPrinter();
        const fortune: ISimpleFortune = {id: this.id, fortune: this.fortune};
        return await printer.print(fortune);
    }
}