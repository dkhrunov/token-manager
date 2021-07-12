export default interface ICookieOptions {
	/**
	 * URL-префикс пути, куки будут доступны
	 * для страниц под этим путём.
	 */
	path?: string;
	/**
	 * Домен, на котором доступны куки.
	 */
	domain?: string;
	/**
	 * Дата истечения срока действия куки,
	 * когда браузер удалит его автоматически.
	 */
	expires?: Date;
	/**
	 * Cрок действия куки в секундах с момента установки.
	 */
	maxAge?: number;
	/**
	 * Куки следует передавать только по HTTPS-протоколу.
	 */
	secure?: boolean;
	/**
	 * Это ещё одна настройка безопасности,
	 * применяется для защиты от так называемой XSRF-атаки.
	 */
	samesite?: SamesiteOption;
}

export enum SamesiteOption {
	strict = 'strict',
	lax = 'lax',
}
