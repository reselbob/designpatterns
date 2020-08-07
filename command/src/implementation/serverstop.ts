import {ICommand} from '../interface/command';
import { ServerCommandBase } from '../base/serverCommand';
import { ICommandStatus } from './../interface/commandStatus';
export class ServerStop extends ServerCommandBase implements ICommand{
    public execute(): ICommandStatus {
        const status =  {statusCode :200, message: {msg: "Stopping server", date: new Date()}} as ICommandStatus;
        this.log(status);
        return status;
    }
}