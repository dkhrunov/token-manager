import IToken from "../Token/IToken";

export default abstract class TokenStorage {
	/**
	 * Получить токен из хранилища.
	 * @param key Ключ под которым храниться токен.
	 */
	public abstract get(key: string): string | null;
	/**
	 * Сохраняет токен в хранилище.
	 * @param key Ключ под которым будет храниться токен.
	 * @param token Токен.
	 */
	public abstract set(key: string, token: IToken): void;
	/**
	 * Удаляет токен из хранилища.
	 * @param key Ключ под которым храниться токен.
	 */
	public abstract delete(key: string): void;
	/**
	 * Токен валиден?
	 * @param key Ключ под которым храниться токен.
	 */
	public abstract isValid(key: string): boolean;
}
