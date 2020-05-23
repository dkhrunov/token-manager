import IToken from '../IToken';

export default interface IAuthTokens {
	accessToken: IToken;
	refreshToken: IToken;
}
