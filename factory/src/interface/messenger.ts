import { IResult } from './result';

export interface IMessenger {
    send(from: object, to: object, message: object): IResult;
}