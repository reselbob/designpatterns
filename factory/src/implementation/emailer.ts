import { Transport } from './../enum/transport';
import { IResult } from './../interface/result';
import { IMessenger } from "../interface/messenger";

export class Emailer implements IMessenger{
    send(from: object, to: object, message: object): IResult{
        console.log('I am emailing');
        const result: IResult = {statusCode: 200, message: 'EMAIL OK', transport:Transport.EMAIL};
        
        return result;
    };
}