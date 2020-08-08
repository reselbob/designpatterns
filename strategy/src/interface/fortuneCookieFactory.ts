import { IFortuneCookie } from './fortuneCookie';
import { RenderType } from '../enum/renderType';

export interface IFortuneCookieFactory{
    getFortuneCookie(renderType: RenderType): IFortuneCookie
}