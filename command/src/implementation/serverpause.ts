import { ICommandStatus } from './../interface/commandStatus';
import {ICommand} from '../interface/command';
import {ServerCommandBase} from '../base/serverCommand';
export class ServerPause extends ServerCommandBase implements ICommand{
    public execute(): ICommandStatus {
        const status: ICommandStatus = {message: "Pausing server", date: new Date()};
        this.log(status);
        return status;
    }
}