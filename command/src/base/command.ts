import { ICommand } from './../interface/command';
import { ICommandStatus} from "../interface/commandStatus";

export abstract class CommandBase implements ICommand {
    abstract execute(command: ICommand): ICommandStatus;
    protected log(data: object): void{
        console.log(data);
    };
}