import { IPrintStatus } from './../interface/printStatus';
import { IPrinter } from './../interface/printer';
import {PrinterBase} from './../base/printer'
import { ISimpleFortune } from '../interface/simpleFortune';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';
export class PdfPrinter extends PrinterBase implements IPrinter {
    async print(fortune: ISimpleFortune): Promise<IPrintStatus>{
        const pdfFileSpec: string = await this.createPdf(fortune.fortune);
        return  {statusCode:200, message: pdfFileSpec} as IPrintStatus;
    }
/*
creates a PDF and returns the full path filename of the
PDF created.
*/
    async createPdf(fortune:string): Promise<string> {
        
        const pdfDoc: PDFDocument = await PDFDocument.create()
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
      
        const page = pdfDoc.addPage()
        const { width, height } = page.getSize()
        const fontSize = 30
        page.drawText(fortune, {
          x: 50,
          y: height - 4 * fontSize,
          size: fontSize,
          font: timesRomanFont,
          color: rgb(0, 0, 0),
        });
      
        const pdfBytes = await pdfDoc.save();
        const pdfPath: string = process.env.FORTUNES_PDF_PATH ||  path.join(__dirname, 'pdfs');
        const fileName: string = `${uuidv4()}.pdf`;
        const fileSpec: string = path.join(pdfPath, fileName);

        //check to see if the path exists, if not make it
        if(!fs.existsSync(pdfPath)){
            fs.mkdirSync(pdfPath);
        }

        await fs.writeFile(fileSpec, pdfBytes,  function(err) {
            if (err) throw err;
            console.log(`File created: ${fileSpec} at ${new Date()}`);
        });

        return fileSpec;
      }
}