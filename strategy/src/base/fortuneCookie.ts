import { ISimpleFortune } from './../interface/simpleFortune';
import { DataManager } from './../data/dataManager';
import { IPrintStatus } from './../interface/printStatus';
import { IFortuneCookie } from './../interface/fortuneCookie';


export abstract class FortuneCookieBase implements IFortuneCookie{
    constructor(){
        const f = this.getFortune();
        this.id = f.id;
        this.fortune = f.fortune;
    }
    private getFortune(): ISimpleFortune{
        if(!process.env.FORTUNES){
            process.env.FORTUNES = JSON.stringify(DataManager.getFortunes());
        }
        const arr: Array<ISimpleFortune> = JSON.parse(process.env.FORTUNES);
        const max:number = arr.length;
        const min: number = 0;

        const idx: number =  Math.floor(Math.random()*(max-min+1)+min);
        return arr[idx] as ISimpleFortune;
    }
    id: string;
    fortune: string;
    abstract print(): IPrintStatus
}