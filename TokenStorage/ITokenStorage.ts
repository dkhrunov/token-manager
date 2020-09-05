import IToken from "../Token/IToken";

export interface ITokenStorage {
    /**
     * Получить токен из хранилища.
     * @param key Ключ под которым храниться токен.
     */
    get(key: string): string;
	/**
	 * Сохраняет токен в хранилище.
	 * @param key Ключ под которым будет храниться токен.
	 * @param token Токен.
	 */
    set(key: string, token: IToken): void;
	/**
	 * Удаляет токен из хранилища.
     * @param key Ключ под которым храниться токен.
	 */
    delete(key: string): void;
    /**
	 * Токен валиден?
     * @param key Ключ под которым храниться токен.
	 */
    isValid(key: string): boolean;
}