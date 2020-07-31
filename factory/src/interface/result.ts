import { Transport } from './../enum/transport';
export interface IResult{
    statusCode:number
    message:string
    transport: Transport
}