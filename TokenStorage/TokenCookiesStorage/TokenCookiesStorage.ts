import CookieBuilder from './CookieBuilder';
import { ITokenStorage } from '../ITokenStorage';
import IToken from '../../Token/IToken';

// TODO: Нет возможности без костылей реализовать статические методы из интерфейса
// либо они не статические и реализуют интерфейс, либо отказываться от интерфейса.
export default class TokenCookiesStorage implements ITokenStorage {

	/**
	 * Получает значение кук по ключу.
	 * @param name Ключ, по которому храниться куки.
	 */
	public get(name: string): string {
		const matches = document.cookie.match(new RegExp(
			'(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
		));

		return matches ? decodeURIComponent(matches[1]) : '';
	}

	/**
	 * Создает и сохраняет куки.
	 * @param name Ключ, по которому будут храниться куки.
	 * @param token Токен.
	 */
	public set(name: string, token: IToken): void {
        const cookie = encodeURIComponent(name) + '=' + encodeURIComponent(token.token);
        
        document.cookie = CookieBuilder
            .instantiate(cookie)
            .maxAge(token.expireIn)
            .secure()
            .build();
	}

	/**
	 * Удаляет куки.
	 * @param name Ключ, по которому храниться куки.
	 */
	public delete(name: string): void {
		const cookie = encodeURIComponent(name) + '=' + encodeURIComponent('');

        document.cookie = CookieBuilder
            .instantiate(cookie)
            .maxAge(-1)
            .secure()
            .build();
    }
    
    /**
	 * Проверяет валидность токена.
	 * @param name Ключ, по которому храниться куки.
	 */
    public isValid(name: string): boolean {
        return !this.isTokenExpired(name);
    }

    /**
     * Проверяет истек ли срок хранения (срок хранения = времени валидности токена) токена в куках или нет.
	 * @param name Ключ, по которому храниться куки.
     */
    private isTokenExpired(name: string): boolean {
        return this.get(name) === '';
    }
}
