import { FortuneCookieText } from './fortuneCookieText';
import { FortuneCookieHtml } from './fortuneCookieHTML';
import { RenderType } from './../enum/renderType';
import { IFortuneCookieFactory } from './../interface/FortuneCookieFactory';
export class FortuneCookieFactory extends FortuneCookieFactoryBase implements IFortuneCookieFactory{
    getFortuneCookie(renderType: RenderType): IFortuneCookie {
        let fc: IFortuneCookie = null;
        switch (renderType) {
            case RenderType.PDF :
                fc = new FortuneCookiePdf();
                breakl
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