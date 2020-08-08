import { IFortuneCookie } from '../interface/fortuneCookie.ts.ts';
import { IFortuneCookie } from '../interface/fortuneCookie.ts.ts';
import { RenderType } from '../enum/renderType';
import { IFortuneCookieFactory } from './../interface/FortuneCookieFactory';
export abstract class FortuneCookieFactoryBase implements IFortuneCookieFactory{
     abstract getFortuneCookie(renderType: RenderType): IFortuneCookie{};
}