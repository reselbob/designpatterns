import {ICommand} from '../interface/command';
import { ICommandStatus } from './../interface/commandStatus';
import { ServerCommandBase } from '../base/serverCommand';
export class ServerStart extends ServerCommandBase implements ICommand{
    constructor(port: number){
        super(port);
    }
    public execute(): ICommandStatus {
        const status =  {statusCode :200, message: {msg: "Starting server", date: new Date()}} as ICommandStatus;
        this.log(status);
        return status;
    }
}