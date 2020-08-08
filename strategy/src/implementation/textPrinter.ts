import { IPrintStatus } from './../interface/printStatus';
import { IPrinter } from './../interface/printer';
import {PrinterBase} from './../base/printer';
import { ISimpleFortune } from '../interface/simpleFortune';
export class TextPrinter extends PrinterBase implements IPrinter {
    print(fortune: ISimpleFortune): IPrintStatus{
        const str: string = JSON.stringify(fortune)
        console.log(str);
        return {statusCode:200, message:str}
    }
}