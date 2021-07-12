import IToken from "../../Token/IToken";
import TokenStorage from "../TokenStorage";

export default class TokenLocalStorage extends TokenStorage {

	/**
	 * Получить токен из `localStrorage`.
	 * @param key Ключ, по которому будут храниться токен.
	 */
	public get(key: string): string | null {
		const tokenRecord = localStorage.getItem(key);

		return tokenRecord ? JSON.parse(tokenRecord).token : null;
	}

	/**
	 * Сохранить токен в `localStrorage`.
	 * @param key Ключ, по которому будут храниться токен.
	 * @param token Токен.
	 */
	public set(key: string, token: IToken): void {
		localStorage.setItem(key, JSON.stringify(token));
	}

	/**
	 * Удалить токен из `localStrorage`.
	 * @param key Ключ, по которому будут храниться токен.
	 */
	public delete(key: string): void {
		localStorage.removeItem(key);
	}

	/**
	 * Проверить не истекло ли время валидности токена.
	 * @param key Ключ, по которому будут храниться токен.
	 */
	public isValid(key: string): boolean {
        if (!localStorage.getItem(key)) {
            return false;
        }

		const token: IToken = JSON.parse(localStorage.getItem(key)!);

		const isInfiniteToken = token.expireIn === -1;
		if (isInfiniteToken) {
			return true;
		}

		return token.expireIn > Math.floor(Date.now() / 1000);
	}
}
