import TokenCookiesStorage from "./TokenCookiesStorage";
import TokenLocalStorage from "./TokenLocalStorage";
import TokenStorage from "./TokenStorage";
import { TokenStorageStrategy } from "./TokenStorageStrategy";

// TODO: поискать еще варианты с реализацией фабрики
export default class TokenStorageFactory {

    public static create(type: TokenStorageStrategy.LocalStorage): TokenLocalStorage;
    public static create(type: TokenStorageStrategy.Cookies): TokenCookiesStorage;
    public static create(type: TokenStorageStrategy): TokenStorage {
        switch (type) {
            case TokenStorageStrategy.LocalStorage:
                return new TokenLocalStorage();
            case TokenStorageStrategy.Cookies:
                return new TokenCookiesStorage();
            default:
                throw new Error('Not supported storage strategy');
        }
    }

}