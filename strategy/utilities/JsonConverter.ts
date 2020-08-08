import { IFortuneCookie } from './../src/interface/fortuneCookie';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';

interface ISimpleFortune{
    id: string;
    fortune: string;

}

export class JsonConverter {
    static convert(){
        const arr = new Array<ISimpleFortune>();
        const filespec = path.join(__dirname, 'fortunes.txt');
        require('fs').readFileSync(filespec, 'utf-8').split(/\r?\n/).forEach(function(line: string){
            arr.push({id: uuidv4(), fortune:line});
        });
        console.log("Data initialized at : " + new Date());
        fs.writeFile("fortunes.json", JSON.stringify(arr), function(err: any) {
            if (err) {
                console.log(err);
            }
        });

        //save json
    }
}