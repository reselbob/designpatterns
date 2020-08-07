import { ICommandStatus } from './../interface/commandStatus';
import {CommandBase} from './command'
import { ICommand } from './../interface/command';
export abstract class ServerCommandBase extends CommandBase implements ICommand{
    private port: number;
    constructor (port: number){
        super();
        this.port = port;
    }
}