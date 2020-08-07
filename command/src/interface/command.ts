import {ICommandStatus} from "./commandStatus"
export interface ICommand {
    execute(): ICommandStatus;
    log(): void;
    log(data: object): void;
}