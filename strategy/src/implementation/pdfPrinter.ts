import { IPrintStatus } from './../interface/printStatus';
import { IPrinter } from './../interface/printer';
import {PrinterBase} from './../base/printer'
import { ISimpleFortune } from '../interface/simpleFortune';
export class PdfPrinter extends PrinterBase implements IPrinter {
    print(fortune: ISimpleFortune): IPrintStatus{
        throw new Error('Not Implemented')
    }
}