import { IPrintStatus } from './../interface/printStatus';
import { IPrinter } from './../interface/printer';
import {PrinterBase} from './../base/printer'
import { ISimpleFortune } from '../interface/simpleFortune';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

export class HtmlPrinter extends PrinterBase implements IPrinter {
    async print(fortune: ISimpleFortune): Promise<IPrintStatus>{
        const html: string = `<HTML><BODY><H1>${fortune.fortune}</H1></BODY></HTML>`;

        const htmlPath: string = process.env.FORTUNES_HTML_PATH ||  path.join(__dirname, 'html');
        const fileName: string = `${uuidv4()}.html`;
        const fileSpec: string = path.join(htmlPath, fileName);

        //check to see if the path exists, if not make it
        if(!fs.existsSync(htmlPath)){
            fs.mkdirSync(htmlPath);
        }
        await fs.writeFile(fileSpec, html,  function(err) {
            if (err) throw err;
            console.log(`File created: ${fileSpec} at ${new Date()}`);
        });
        return {statusCode:200, message:fileSpec}
    }
}