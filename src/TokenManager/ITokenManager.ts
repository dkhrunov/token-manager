import IToken from '../Token/IToken';

export default interface ITokenManager {
	/**
	 * Получить токен по имени.
	 * @param tokenName Имя токена.
	 */
	getToken(tokenName: string): string | IToken | null;
	/**
	 * Сохранить токен, где имя токена является его ключом.
	 * @param tokenName Имя токена.
	 * @param token Токен.
	 */
    setToken(tokenName: string, token: IToken): void;
    /**
	 * Удалить токен по имени.
	 * @param tokenName Имя токена.
	 */
    deleteToken(tokenName: string): void;
    /**
	 * Проверка валидности токена.
	 * @param tokenName Имя токена.
	 */
    isValidToken(tokenName: string): boolean;
}
