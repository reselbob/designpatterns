import { IPrintStatus } from './../interface/printStatus';
import { IPrinter } from './../interface/printer';
import {PrinterBase} from './../base/printer'
import { ISimpleFortune } from '../interface/simpleFortune';

export class HtmlPrinter extends PrinterBase implements IPrinter {
    print(fortune: ISimpleFortune): IPrintStatus{
        const html: string = `<HTML><BODY><H1>${fortune.fortune}</H1></BODY></HTML>`;
        console.log(html);
        return {statusCode:200, message:html}
    }
}