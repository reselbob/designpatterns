import { IPrintStatus } from './../interface/printStatus';
import { IPrinter } from './../interface/printer';
import {PrinterBase} from './../base/printer';
import { ISimpleFortune } from '../interface/simpleFortune';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
export class TextPrinter extends PrinterBase implements IPrinter {
    async print(fortune: ISimpleFortune): Promise<IPrintStatus>{
        const text: string = JSON.stringify(fortune)
        const textPath: string = process.env.FORTUNES_TEXT_PATH ||  path.join(__dirname, 'text');
        const fileName: string = `${uuidv4()}.text`;
        const fileSpec: string = path.join(textPath, fileName);

        //check to see if the path exists, if not make it
            if(!fs.existsSync(textPath)){
            fs.mkdirSync(textPath);
        }
        await fs.writeFile(fileSpec, text,  function(err) {
            if (err) throw err;
            console.log(`File created: ${fileSpec} at ${new Date()}`);
        });
        return {statusCode:200, message:fileSpec}
    }
}