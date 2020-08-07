import { ICommandStatus } from './../interface/commandStatus';
import {ICommand} from '../interface/command';
import {ServerCommandBase} from '../base/serverCommand';
export class ServerPause extends ServerCommandBase implements ICommand{
    public execute(): ICommandStatus {
        const status =  {statusCode :200, message: {msg: "Pausing server", date: new Date()}} as ICommandStatus;
        this.log(status);
        return status;
    }
}