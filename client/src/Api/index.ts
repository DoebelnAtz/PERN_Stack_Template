import axios from 'axios';

import config from '../Config'

export const makeRequest = async (url: string, method: any, data: any = {}) => {
	let resp;

	try {
		resp = await axios({
			url: `${config.url}/api${url}`,
			method: method,
			data: data,
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return resp.data;
	} catch (e) {
		if (!e.response) {
			//window.location.replace('/505');
		}
		else {
			throw e;
		}
	}
};