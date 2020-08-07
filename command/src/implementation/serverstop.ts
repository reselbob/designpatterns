import {ICommand} from '../interface/command';
import {CommandBase} from '../base/command';
import { ICommandStatus } from './../interface/commandStatus';
export class ServerStop extends CommandBase implements ICommand{
    const status:  ICommandStatus = {message: "Stopping server", date: new Date()};
    this.log(status);
    return status;
}