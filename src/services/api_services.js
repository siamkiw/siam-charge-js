import axios from 'axios';
import { getHeader } from '../helper/apiHelper';
// import settingServices from './setting_services';
import config from '../config';

const BASE_URL = config.BASE_URL;

const apiService = {
	onLogin(req) {
		return axios.post(`${BASE_URL}/admin/login`, req);
	},
	onGetChargeStations(){
		console.log('onGetChargeStations')
		return axios.get(`${BASE_URL}/admin/charge-station/list-all?limit=5&offset=0`, getHeader());
	}
	// onLogout() {
	// 	return axios.post(`${BASE_URL}/v1/auth/logout`, {}, getHeader());
	// },
	// onGetProfile() {
	// 	return axios.get(`${BASE_URL}/v1/user/info`, getHeader());
	// },
	// onPostUploadImage(req) {
	// 	return axios.post(`${BASE_URL}/v1/upload/public`, req, getHeaderFormData());
	// },
	// ...settingServices
};

export default apiService;
