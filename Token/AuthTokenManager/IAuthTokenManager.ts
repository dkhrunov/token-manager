import IToken from '../IToken';
import IAuthTokens from './IAuthTokens';

export default interface IAuthTokenManager {
	/**
	 * Получить `accessToken`.
	 */
	getAccessToken(): string;
	/**
	 * Сохранить токен доступа (`accessToken`).
	 * @param accessToken Токен доступа.
	 */
	setAccessToken(accessToken: IToken): void;

	/**
	 * Получить `refreshToken`.
	 */
	getRefreshToken(): string;
	/**
	 * Сохранить токен обновления (`refreshToken`).
	 * @param refreshToken Токен обновления.
	 */
	setRefreshToken(refreshToken: IToken): void;

	/**
	 * Получить `accessToken` и `refreshToken`.
	 */
	getAuthTokens(): { accessToken: string; refreshToken: string };
	/**
	 * Сохранить токен доступа (`accessToken`) и токен обновления (`refreshToken`).
	 * @param tokens Содержит токен доступа и токен обновления.
	 */
	setAuthTokens(tokens: IAuthTokens): void;
}
