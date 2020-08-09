import { ICommand } from './../interface/command';
import { IController } from "../interface/controller";
import { ICommandStatus} from "../interface/commandStatus";

export abstract class ControllerBase implements IController{
    abstract getCommands(defaultPort: number) :Array<ICommand>;
    execute(command: ICommand): ICommandStatus{
        return command.execute();
    }
    log(data: object): void{
        console.log(data);
    };
}