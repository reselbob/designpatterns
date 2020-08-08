import { ISimpleFortune } from './../interface/simpleFortune';
import * as fs from 'fs';
import * as path from 'path';
export class DataManager{
    static getFortunes(): Array<ISimpleFortune> {
        const filespec = path.join(__dirname, 'fortunes.json');
        return JSON.parse(fs.readFileSync(filespec, 'utf-8')) as Array<ISimpleFortune> 
    }
}