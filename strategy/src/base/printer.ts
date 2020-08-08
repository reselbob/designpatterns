import { ISimpleFortune } from './../interface/simpleFortune';
import { IPrintStatus } from './../interface/printStatus';
import { IPrinter } from './../interface/printer';

export abstract class PrinterBase implements IPrinter{
    abstract print(fortune: ISimpleFortune): IPrintStatus
};