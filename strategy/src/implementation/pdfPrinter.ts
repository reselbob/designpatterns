import { IPrintStatus } from './../interface/printStatus';
import { IPrinter } from './../interface/printer';
import {PrinterBase} from './../base/printer'

export class PdfPrinter extends PrinterBase implements IPrinter {
    print(buffer: Buffer): IPrintStatus{
        throw new Error('Not Implemented')
    }
}