// import ITokenStorage from "./ITokenStorage";

import CookieManager from '../../Cookie/СookieManager';
import ITokenManager from './ITokenManager';
import IToken from '../IToken';

// TODO:
//  СДЕЛАТЬ ВСЕ МЕТОДЫ СТАТИЧЕСКИМИ!!!!!!!!!!!!!!!!!!!!
export default class TokenManager implements ITokenManager {

	private readonly cookieManager: CookieManager;

	constructor() {
		this.cookieManager = new CookieManager();
	}

	public getToken(tokenName: string): string {
		return this.cookieManager.getCookie(tokenName);
	}

	public setToken(tokenName: string, token: IToken): void {
		this.cookieManager.setCookie(tokenName, token.token, { maxAge: token.expireIn });
	}
}
