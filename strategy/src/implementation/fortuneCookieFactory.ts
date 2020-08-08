import { IFortuneCookieFactory } from './../interface/fortuneCookieFactory';
import { FortuneCookiePdf } from './fortuneCookiePdf';
import { IFortuneCookie } from './../interface/fortuneCookie';
import { FortuneCookieText } from './fortuneCookieText';
import { FortuneCookieHtml } from './fortuneCookieHTML';
import { RenderType } from './../enum/renderType';
import {FortuneCookieFactoryBase} from './../base/fortuneCookieFactory';

export class FortuneCookieFactory extends FortuneCookieFactoryBase implements IFortuneCookieFactory{
    getFortuneCookie(renderType: RenderType): IFortuneCookie {
        let fc: IFortuneCookie = new FortuneCookieText(); //default
        switch (renderType) {
            case RenderType.PDF :
                fc = new FortuneCookiePdf();
                break;
            case RenderType.HTML :
                fc = new FortuneCookieHtml();
                break;
            case RenderType.TEXT :
                fc = new FortuneCookieText()
                break;
            default:
                fc = new FortuneCookieText()
                break;     
        }
        return fc;
    }
}