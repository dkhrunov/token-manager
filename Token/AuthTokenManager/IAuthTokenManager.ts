import IToken from '../IToken';
import IAuthTokens from './IAuthTokens';

export default interface IAuthTokenManager {
	/** Получить `accessToken`. */
	getAccessToken(): string;
	/**
	 * Сохранить токен доступа (`accessToken`).
	 * @param accessToken Токен доступа.
	 */
    setAccessToken(accessToken: IToken): void;
	/** Удалить `accessToken`. */
    deleteAccessToken(): void;
    /** Проверка валидности `accessToken`? */
    isValidAccessToken(): boolean;

	/** Получить `refreshToken`. */
	getRefreshToken(): string;
	/**
	 * Сохранить токен обновления (`refreshToken`).
	 * @param refreshToken Токен обновления.
	 */
	setRefreshToken(refreshToken: IToken): void;
	/** Удалить `refreshToken`. */
    deleteRefreshToken(): void;
    /** Проверка валидности `refreshToken`? */
    isValidRefreshToken(): boolean;

	/** Получить `accessToken` и `refreshToken`. */
	getAuthTokens(): { accessToken: string; refreshToken: string };
	/**
	 * Сохранить токен доступа (`accessToken`) и токен обновления (`refreshToken`).
	 * @param tokens Содержит токен доступа и токен обновления.
	 */
	setAuthTokens(tokens: IAuthTokens): void;
	/** Удалить `accessToken` и `refreshToken`. */
    deleteAuthTokens(): void;
}
