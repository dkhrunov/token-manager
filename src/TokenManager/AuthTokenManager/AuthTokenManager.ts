import IToken from '../../Token/IToken';
import IAuthTokens from './IAuthTokens';
import IAuthTokenManager from './IAuthTokenManager';
import TokenManager from '../TokenManager';
import TokenStorage from '../../TokenStorage/TokenStorage';
import { AuthTokensTypes } from './AuthTokensTypes';

export default class AuthTokenManager extends TokenManager implements IAuthTokenManager {

    constructor(tokensStorage: TokenStorage) {
		super(tokensStorage);
	}

	public getAccessToken(): string | null {
		return this.getToken(AuthTokensTypes.accessToken);
	}

	public setAccessToken(accessToken: IToken): void {
		this.setToken(AuthTokensTypes.accessToken, accessToken);
    }
    
    public deleteAccessToken(): void {
        this.deleteToken(AuthTokensTypes.accessToken);
    }

    public isValidAccessToken(): boolean {
        return this.isValidToken(AuthTokensTypes.accessToken);
    }

	public getRefreshToken(): string | null {
		return this.getToken(AuthTokensTypes.refreshToken);
	}

	public setRefreshToken(refreshToken: IToken): void {
		this.setToken(AuthTokensTypes.refreshToken, refreshToken);
    }
    
    public deleteRefreshToken(): void {
        this.deleteToken(AuthTokensTypes.refreshToken);
    }

    public isValidRefreshToken(): boolean {
        return this.isValidToken(AuthTokensTypes.refreshToken);
    }

	public getAccessTokenToRefresh(): string | null {
		return this.getToken(AuthTokensTypes.accessTokenToRefresh);
	}

	public setAccessTokenToRefresh(tokens: IAuthTokens): void {
		const accessTokenToRefresh: IToken = { token: tokens.accessToken.token, expireIn: tokens.refreshToken.expireIn };
		this.setToken(AuthTokensTypes.accessTokenToRefresh, accessTokenToRefresh);
	}

	public deleteAccessTokenToRefresh(): void {
		this.deleteToken(AuthTokensTypes.accessTokenToRefresh);
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
