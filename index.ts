import AuthTokenManager from "./src/TokenManager/AuthTokenManager/AuthTokenManager";
import IAuthTokens from "./src/TokenManager/AuthTokenManager/IAuthTokens";
import IToken from "./src/Token/IToken";
import TokenStorageFactory from "./src/TokenStorage/TokenStorageFactory";
import { TokenStorageStrategy } from "./src/TokenStorage/TokenStorageStrategy";

interface ITokensMock {
    accessToken: string;
    accessTokenExpireIn: number;
    refreshToken: string;
    refreshTokenExpireIn: number
};

const authenticate = () => {
    const tokensMock: ITokensMock = {
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjE2IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvaGFzaCI6InJDWmtYNUE1SUdFdFJQRnp6OTkxMWdpbnFBWXJBWTZwIiwiQWNjZXNzVG9rZW4uVG9rZW5Db25uZWN0aW9uIjoiOXVrS09pdVNBd25Kc1pneEl6b1VST0ViNXlBaUNFNUtXQUhwRVBQalhWZE9CcVNYU25mMkFUQkswTGZXV0xLU0lTd1pEbXkwUEF0Qk8wckhmb0w5dzJIQU1Va3ltcUdtcmo0bjd3ZXBKOHJBb3FrM21BU2tiRllBNDFad202TFMiLCJuYmYiOjE1OTAyMzQxODQsImV4cCI6MTU5MDIzNzc4NCwiaWF0IjoxNTkwMjM0MTg0LCJpc3MiOiJ2a21hLmFwaS5hY2Nlc3MiLCJhdWQiOiJjbGllbnQifQ.F9li2bU2SMRk9VC0xUcYVR80ZwelVYu7SS5K-4NKJ3U",
        accessTokenExpireIn: 59, // Minutes
        refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9oYXNoIjoickNaa1g1QTVJR0V0UlBGeno5OTExZ2lucUFZckFZNnAiLCJBY2Nlc3NUb2tlbi5Ub2tlbkNvbm5lY3Rpb24iOiI5dWtLT2l1U0F3bkpzWmd4SXpvVVJPRWI1eUFpQ0U1S1dBSHBFUFBqWFZkT0JxU1hTbmYyQVRCSzBMZldXTEtTSVN3WkRteTBQQXRCTzBySGZvTDl3MkhBTVVreW1xR21yajRuN3dlcEo4ckFvcWszbUFTa2JGWUE0MVp3bTZMUyIsIm5iZiI6MTU5MDIzNDE4NCwiZXhwIjoxNTkwMzIwNTg0LCJpYXQiOjE1OTAyMzQxODQsImlzcyI6InZrbWEuYXBpLnJlZnJlc2giLCJhdWQiOiJ0b2tlbiJ9.UhcNqrxgyw07WT6xMTkT5mE3TILG5Xl36TfCVQSoIWA",
        refreshTokenExpireIn: 1439, // Minutes
    }

    return new Promise<ITokensMock>((resolve, reject) => setTimeout(() => resolve(tokensMock), 2000));
}

// store tokens in LocalStorage
const tokenLocalStorage = TokenStorageFactory.create(TokenStorageStrategy.LocalStorage);
// Or store tokens in cookies
const tokenCookiesStorage = TokenStorageFactory.create(TokenStorageStrategy.Cookies);

const authTokenManager = new AuthTokenManager(tokenLocalStorage);

authenticate()
    .then((tokens: ITokensMock): IAuthTokens => {
        const accessToken: IToken = {
            token: tokens.accessToken,
            expireIn: tokens.accessTokenExpireIn * 60, // To seconds
        };

        const refreshToken: IToken = {
            token: tokens.refreshToken,
            expireIn: tokens.refreshTokenExpireIn * 60, // To seconds
        };

        return { accessToken, refreshToken };
    })
    .then((tokens: IAuthTokens): void => {
        authTokenManager.setAccessToken(tokens.accessToken);
        authTokenManager.setRefreshToken(tokens.refreshToken);
        authTokenManager.setAccessTokenToRefresh(tokens);

        console.log('AuthTokenManager getAccessToken :>> ', authTokenManager.getAccessToken());
        console.log('AuthTokenManager getRefreshToken :>> ', authTokenManager.getRefreshToken());

        console.log('AuthTokenManager valid AccessToken? :>> ', authTokenManager.isValidAccessToken());
        console.log('AuthTokenManager valid RefreshToken? :>> ', authTokenManager.isValidRefreshToken());

        authTokenManager.deleteAuthTokens();

        console.log('AuthTokenManager AccessToken will be deleted :>> ', authTokenManager.getAccessToken());
        console.log('AuthTokenManager RefreshToken will be deleted :>> ', authTokenManager.getRefreshToken());
    });