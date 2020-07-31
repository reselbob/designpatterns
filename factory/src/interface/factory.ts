import { Transport } from './../enum/transport';
import {IMessenger} from 'messenger'
export interface IFactory{
    getMessenger: (transport: Transport) => IMessenger
}