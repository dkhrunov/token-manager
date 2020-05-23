import ICookieOptions from '../ICookieOptions';

export default interface ICookieManager {
	/**
	 * Получение значение куки по ключу.
	 * @param name имя (ключ), по которому будет искаться куки.
	 */
	getCookie(name: string): string;
	/**
	 * Сохраняет значение (`value`) по имени (`name`) в cookies.
	 * @param name имя (ключ) куки.
	 * @param value значение.
	 * @param options доп опции для установленной куки.
	 */
	setCookie(name: string, value: string, options: ICookieOptions): void;
	/**
	 * Удаляет значение из кук.
	 * @param name имя (ключ) куки.
	 */
	deleteCookie(name: string): void;
}
