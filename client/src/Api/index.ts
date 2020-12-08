import axios from 'axios';

import config from '../Config'
import { getLocal, objectToQueryString } from '../Utils';


const defaults = {
  headers: () => ({
    'Content-Type': 'application/json',
    Authorization: getLocal('token') ? `Bearer ${getLocal('token')}` : undefined,
  }),
  error: {
    code: 'INTERNAL_ERROR',
    message: 'Something went wrong. Please check your internet connection.',
    status: 503,
    data: {},
  },
};

const makeRequest = async (method: any, url: string, data: any = {}) => new Promise((resolve, reject) => {
    axios({
      url: `${config.url}/api${url}`,
      method,
      headers: defaults.headers(),
      params: method === 'get' ? data : undefined,
      data: method !== 'get' ? data : undefined,
      paramsSerializer: objectToQueryString,
    }).then(
      response => {
        resolve(response.data);
      },
      error => {
        if (error.response) {
                    reject(defaults.error);

        } else {
          reject(defaults.error);
        }
      },
    );
});

export default {
// @ts-ignore
  get: (...args: any ) => makeRequest('get', ...args),
  post: (...args: [any]) => makeRequest('post', ...args),
  put: (...args: [any]) => makeRequest('put', ...args),
  patch: (...args: [any]) => makeRequest('patch', ...args),
  delete: (...args: [any]) => makeRequest('delete', ...args),
};