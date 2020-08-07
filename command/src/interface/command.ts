import {ICommandStatus} from "./commandStatus"
export interface ICommand {
    execute(): ICommandStatus;
}