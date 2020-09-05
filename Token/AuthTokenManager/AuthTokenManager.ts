// import ITokenStorage from "./ITokenStorage";

import TokenManager from '../TokenManager';
import IToken from '../IToken';
import IAuthTokens from './IAuthTokens';
import IAuthTokenManager from './IAuthTokenManager';


// TODO:
// 1) Проверку на то что токен еще не истек и храниться в токен сторе.
export default class AuthTokenManager extends TokenManager implements IAuthTokenManager {
    
	public getAccessToken(): string {
		return this.getToken('accessToken');
	}

	public setAccessToken(accessToken: IToken): void {
		this.setToken('accessToken', accessToken);
    }
    
    public deleteAccessToken(): void {
        this.deleteToken('accessToken');
    }

    public isValidAccessToken(): boolean {
        return this.isValidToken('accessToken');
    }

	public getRefreshToken(): string {
		return this.getToken('refreshToken');
	}

	public setRefreshToken(refreshToken: IToken): void {
		this.setToken('refreshToken', refreshToken);
    }
    
    public deleteRefreshToken(): void {
        this.deleteToken('refreshToken');
    }

    public isValidRefreshToken(): boolean {
        return this.isValidToken('refreshToken');
    }

	public getAuthTokens(): { accessToken: string; refreshToken: string } {
		return {
			accessToken: this.getAccessToken(),
			refreshToken: this.getRefreshToken(),
		}
	}

	public setAuthTokens(tokens: IAuthTokens): void {
		this.setAccessToken(tokens.accessToken);
		this.setRefreshToken(tokens.refreshToken);
    }
    
    public deleteAuthTokens(): void {
        this.deleteAccessToken();
        this.deleteRefreshToken();
    }
}
