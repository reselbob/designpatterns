import { ICommand } from './command';
import { ICommandStatus } from './commandStatus';

export interface IController{ 
    getCommands() :Array<ICommand>;
    execute(command: ICommand): ICommandStatus;
    log(data: object): void;
}