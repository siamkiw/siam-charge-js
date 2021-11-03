function getToken() {
	const state = window.localStorage.getItem('siamChargerUser') || `{}`;
	const authModule = JSON.parse(state);
	const token = authModule.data.accessToken || '';
	return token;
}

export const getHeader = () => ({
	headers: {
		Authorization: `Bearer ${getToken()}`
	}
});