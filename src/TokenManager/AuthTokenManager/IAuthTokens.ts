import IToken from '../../Token/IToken';

export default interface IAuthTokens {
	accessToken: IToken;
	refreshToken: IToken;
}
