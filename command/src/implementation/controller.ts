import { ICommandStatus } from './../interface/commandStatus';
import { IController } from './../interface/controller';
import {ICommand} from './../interface/command'
import { ServerPause } from './serverpause';
import { ServerStart } from './serverstart';
import { ServerStop} from './serverstop';
import { ControllerBase }from './../base/controller'
export class Controller extends ControllerBase implements IController{
    getCommands(defaultPort: number):Array<ICommand>{
        const commands = new Array<ICommand>();
        commands.push(new ServerStart(defaultPort));
        commands.push(new ServerPause(defaultPort));
        commands.push (new ServerStop(defaultPort))
        return commands;
    }
}