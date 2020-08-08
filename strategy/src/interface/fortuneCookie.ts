import { ISimpleFortune } from './simpleFortune';
import { IPrintStatus } from './printStatus';

export interface IFortuneCookie  extends ISimpleFortune {
    print(): IPrintStatus
}