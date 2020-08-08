import { IPrintStatus } from './printStatus';
export interface IPrinter{
    print(buffer: Buffer): IPrintStatus
}