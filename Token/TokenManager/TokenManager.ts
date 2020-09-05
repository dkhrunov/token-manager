// import ITokenStorage from "./ITokenStorage";

import ITokenManager from './ITokenManager';
import IToken from '../IToken';
import { ITokenStorage } from '../../TokenStorage/ITokenStorage';

export default class TokenManager implements ITokenManager {

	private readonly tokenStorage: ITokenStorage;

	constructor(tokenStorage: ITokenStorage) {
		this.tokenStorage = tokenStorage;
	}

	public getToken(tokenName: string): string {
		return this.tokenStorage.get(tokenName);
	}

	public setToken(tokenName: string, token: IToken): void {
		this.tokenStorage.set(tokenName, token);
    }
    
    public deleteToken(tokenName: string): void {
		this.tokenStorage.delete(tokenName);
    }
    
    public isValidToken(tokenName: string): boolean {
        return this.tokenStorage.isValid(tokenName);
    }
}
