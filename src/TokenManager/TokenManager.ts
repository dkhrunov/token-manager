import ITokenManager from './ITokenManager';
import IToken from '../Token/IToken';
import TokenStorage from '../TokenStorage/TokenStorage';

export default class TokenManager implements ITokenManager {

	private readonly tokenStorage: TokenStorage;

	constructor(tokenStorage: TokenStorage) {
		this.tokenStorage = tokenStorage;
	}

	public getToken(tokenName: string): string | null {
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
