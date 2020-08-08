import { IFortuneCookieFactory } from './../interface/fortuneCookieFactory';
import { IFortuneCookie } from '../interface/fortuneCookie';
import { RenderType } from '../enum/renderType';
export abstract class FortuneCookieFactoryBase implements IFortuneCookieFactory{
     abstract getFortuneCookie(renderType: RenderType): IFortuneCookie;
}