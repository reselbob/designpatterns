import { IPrintStatus } from './../interface/printStatus';
import { IPrinter } from './../interface/printer';

export abstract class PrinterBase implements IPrinter{
    abstract print(buffer: Buffer): IPrintStatus
};