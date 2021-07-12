import IToken from '../../Token/IToken';
import IAuthTokens from './IAuthTokens';
import IAuthTokenManager from './IAuthTokenManager';
import TokenManager from '../TokenManager';
import TokenStorage from '../../TokenStorage/TokenStorage';
import { AuthTokens } from './AuthTokensEnum';

export default class AuthTokenManager extends TokenManager implements IAuthTokenManager {

    constructor(tokensStorage: TokenStorage) {
		super(tokensStorage);
	}

	public getAccessToken(): string | null {
		return this.getToken(AuthTokens.accessToken);
	}

	public setAccessToken(accessToken: IToken): void {
		this.setToken(AuthTokens.accessToken, accessToken);
    }
    
    public deleteAccessToken(): void {
        this.deleteToken(AuthTokens.accessToken);
    }

    public isValidAccessToken(): boolean {
        return this.isValidToken(AuthTokens.accessToken);
    }

	public getRefreshToken(): string | null {
		return this.getToken(AuthTokens.refreshToken);
	}

	public setRefreshToken(refreshToken: IToken): void {
		this.setToken(AuthTokens.refreshToken, refreshToken);
    }
    
    public deleteRefreshToken(): void {
        this.deleteToken(AuthTokens.refreshToken);
    }

    public isValidRefreshToken(): boolean {
        return this.isValidToken(AuthTokens.refreshToken);
    }

	public getAccessTokenToRefresh(): string | null {
		return this.getToken(AuthTokens.accessTokenToRefresh);
	}

	public setAccessTokenToRefresh(tokens: IAuthTokens): void {
		const accessTokenToRefresh: IToken = { token: tokens.accessToken.token, expireIn: tokens.refreshToken.expireIn };
		this.setToken(AuthTokens.accessTokenToRefresh, accessTokenToRefresh);
	}

	public deleteAccessTokenToRefresh(): void {
		this.deleteToken(AuthTokens.accessTokenToRefresh);
	}

	public getAuthTokens(): { accessToken: string | null; refreshToken: string | null } {
		return {
			accessToken: this.getAccessToken(),
			refreshToken: this.getRefreshToken(),
		}
	}

	public setAuthTokens(tokens: IAuthTokens): void {
		this.setAccessToken(tokens.accessToken);
		this.setRefreshToken(tokens.refreshToken);
		this.setAccessTokenToRefresh(tokens);
	}

	public deleteAuthTokens(): void {
		this.deleteAccessToken();
		this.deleteRefreshToken();
		this.deleteAccessTokenToRefresh();
	}
}
