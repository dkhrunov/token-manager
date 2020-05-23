import ICookieManager from './ICookieManager';
import ICookieOptions from '../ICookieOptions';
import CookieBuilder from '../CookieBuilder';

// TODO: Нет возможности без костылей реализовать статические методы из интерфейса
// либо они не статические и реализуют интерфейс, либоотказываться от интерфейса.
export default class CookieManager implements ICookieManager {

	/**
	 * Получает значение кук по ключу.
	 * @param name Ключ, по которому храниться куки.
	 */
	public getCookie(name: string): string {
		// eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
		const matches = document.cookie.match(new RegExp(
			// eslint-disable-next-line no-useless-escape
			'(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
		));

		return matches ? decodeURIComponent(matches[1]) : '';
	}

	/**
	 * Создает и сохраняет куки.
	 * @param name Ключ, по которому будут храниться куки.
	 * @param value Значение кук.
	 * @param options Дополнительные опции кук.
	 */
	public setCookie(name: string, value: string, options: ICookieOptions): void {
		const cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

		// TODO сделать гибкую настройку кук в билдере по options
		if (options.maxAge) {
			document.cookie = CookieBuilder
				.instantiate(cookie)
				.maxAge(options.maxAge)
				.secure()
				.build()
		} else {
			document.cookie = CookieBuilder
				.instantiate(cookie)
				.secure()
				.build();
		}
	}

	/**
	 * Удаляет куки.
	 * @param name Ключ, по которому храниться куки.
	 */
	public deleteCookie(name: string): void {
		this.setCookie(name, '', { maxAge: -1 });
	}

}
