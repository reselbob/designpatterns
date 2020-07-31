import { Transport } from './../enum/transport';
import { IResult } from './../interface/result';
import { IMessenger } from './../interface/messenger';
export class SMS implements IMessenger{
    send(from: object, to: object, message: object): IResult{
        console.log('I am sending via SMS');
        const result: IResult = {statusCode: 200, message: 'SMS OK', transport:Transport.SMS};
        return result;
    };
}