import { SocialMedia } from './socialmedia';
import { Emailer } from './emailer';
import {SMS} from './sms'
import { IMessenger } from './../interface/messenger';
import { Transport } from './../enum/transport';
import { IFactory } from './../interface/factory';

export class Factory implements IFactory {
    getMessenger(transport: Transport): IMessenger{
        let messenger: IMessenger = new SMS() as IMessenger;
        switch (transport) {
            case Transport.SMS:
                messenger =  new SMS() as IMessenger;
                break;
            case Transport.EMAIL:
                messenger = new Emailer() as IMessenger;
                break;
            case Transport.SOCIAL_MEDIA:
                messenger = new SocialMedia() as IMessenger;
                break;
            default:
                break;
        }
        return messenger
    }
}
