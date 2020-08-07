import {ICommand} from '../interface/command';
import {CommandBase} from '../base/command';
import { ICommandStatus } from './../interface/commandStatus';
export class ServerStart extends CommandBase implements ICommand{
    public execute(): ICommandStatus {
        const status: ICommandStatus = {message: "Starting server", date: new Date()};
        this.log(status);
        return status;
    }
}