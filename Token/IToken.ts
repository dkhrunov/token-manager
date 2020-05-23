export default interface IToken {
	/**
	 * токен.
	 */
	token: string;
	/**
	 * Время валидности токена.
	 */
	expireIn: number;
}
