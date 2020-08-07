import { ICommand } from './../interface/command';
import { ICommandStatus} from "../interface/commandStatus";

export abstract class CommandBase implements ICommand {
    abstract execute(): ICommandStatus;
    protected log(data: object): void{
        console.log(data);
    };
}