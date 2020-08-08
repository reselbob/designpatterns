import { ISimpleFortune } from './simpleFortune';
import { IPrintStatus } from './printStatus';
export interface IPrinter{
    print(fortune: ISimpleFortune): IPrintStatus
}