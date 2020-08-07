import { ICommand } from './../interface/command';
import { IController } from "../interface/controller";
import { ICommandStatus} from "../interface/commandStatus";

export abstract class ControllerBase implements IController{
    abstract getCommands() :Array<ICommand>;
    abstract execute(command: ICommand): ICommandStatus;
    log(data: object): void{
        console.log(data);
    };
}