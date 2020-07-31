import { Transport } from './../enum/transport';
import { IResult } from './../interface/result';
import { IMessenger } from './../interface/messenger';
export class SocialMedia implements IMessenger{
    send(from: object, to: object, message: object): IResult{
        console.log('I am sending via social media');
        const result: IResult = {statusCode: 200, message: 'SOCIAL_MEDIA OK', transport: Transport.SOCIAL_MEDIA};
        return result;
    };
}