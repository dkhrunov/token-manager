import CookieBuilder from './CookieBuilder';
import TokenStorage from '../TokenStorage';
import IToken from '../../Token/IToken';
import { SamesiteOption } from './CookieBuilder/ICookieOptions';

export default class TokenCookiesStorage extends TokenStorage {

    /**
     * Получает значение кук по ключу.
     * @param key Ключ, по которому храниться куки.
     */
    public get(key: string): string | null {
        const matches = document.cookie.match(new RegExp(
            '(?:^|; )' + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
        ));

        return matches ? decodeURIComponent(matches[1]) : null;
    }

    /**
     * Создает и сохраняет куки.
     * @param key Ключ, по которому будут храниться куки.
     * @param token Токен.
     */
    public set(key: string, token: IToken): void {
        const cookie = encodeURIComponent(key) + '=' + encodeURIComponent(token.token);

        const tenYearsInMilliseconds = 10 * 365 * 24 * 60 * 60 * 1000;
        const infiniteToken = Date.now() + tenYearsInMilliseconds;
        const tokenExpireIn = token.expireIn === -1 ? new Date(infiniteToken) : new Date(token.expireIn * 1000);

        document.cookie = CookieBuilder
            .instantiate(cookie)
            .expires(tokenExpireIn)
            .path('/')
            .secure()
            .samesite(SamesiteOption.strict)
            .build();
    }

    /**
     * Удаляет куки.
     * @param key Ключ, по которому храниться куки.
     */
    public delete(key: string): void {
        const cookie = encodeURIComponent(key) + '=';

        document.cookie = CookieBuilder
            .instantiate(cookie)
            .path('/')
            .expires(new Date(0))
            .build();
    }

    /**
      * Проверяет валидность токена.
      * @param key Ключ, по которому храниться куки.
      */
    public isValid(key: string): boolean {
        return !this.isTokenExpired(key);
    }

    /**
     * Проверяет истек ли срок хранения (срок хранения = времени валидности токена) токена в куках или нет.
     * @param key Ключ, по которому храниться куки.
     */
    private isTokenExpired(key: string): boolean {
        return this.get(key) === '';
    }
}
