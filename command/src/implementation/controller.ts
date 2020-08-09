import { ICommandStatus } from './../interface/commandStatus';
import { IController } from './../interface/controller';
import {ICommand} from './../interface/command'
import { ServerPause } from './serverpause';
import { ServerStart } from './serverstart';
import { ServerStop} from './serverstop';
export class Controller implements IController{
    getCommands(defaultPort: number):Array<ICommand>{
        const commands = new Array<ICommand>();

        commands.push(new ServerStart(defaultPort));
        commands.push(new ServerPause(defaultPort));
        commands.push (new ServerStop(defaultPort))

        return commands;
    }
    execute(command: ICommand): ICommandStatus{
        return command.execute();
    };
    log(data: object): void{
        console.log(data);
    };
}