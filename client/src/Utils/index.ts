import queryString from 'query-string';
import { useRef } from 'react';
import { isEqual } from 'lodash';

export const capitalizeFirst = (string: string) => {
	if (string) return string[0].toUpperCase() + string.slice(1);
};

export const getLocal = (item: string) => {
	try {
		if (item) {
			return JSON.parse(localStorage.getItem(item) || '');
		} else {
			return null;
		}
	} catch (e) {
		return false;
	}
};

export const setLocal = (name: string, jsonItem: { items: any }) => {
	localStorage.setItem(name, JSON.stringify(jsonItem));
};



export const useDeepCompareMemoize = (value: any) => {
  const valueRef = useRef();

  if (!isEqual(value, valueRef.current)) {
    valueRef.current = value;
  }
  return valueRef.current;
};


export const queryStringToObject = (str: string, options = {}) =>
  queryString.parse(str, {
    arrayFormat: 'bracket',
    ...options,
  });

export const objectToQueryString = (obj: any, options = {}) =>
  queryString.stringify(obj, {
    arrayFormat: 'bracket',
    ...options,
  });


export const getLocalTimeFormat = (date: string) => {
	let res = new Date(date);
	return res.toLocaleString();
};

export const calculateTimeSince = (isoString: string) => {
	let then = new Date(isoString);
	// @ts-ignore
    var seconds = Math.floor((new Date() - then) / 1000); // remove two hours for timezone...

	var interval = Math.floor(seconds / 31536000);

	if (interval > 1) {
		return interval + (interval === 1 ? ' year' : ' years') + ' ago';
	}
	interval = Math.floor(seconds / 2592000);
	if (interval >= 1) {
		return interval + (interval === 1 ? ' month' : 'months') + ' ago';
	}
	interval = Math.floor(seconds / 86400);
	if (interval >= 1) {
		return interval + (interval === 1 ? ' day' : ' days') + ' ago';
	}
	interval = Math.floor(seconds / 3600);
	if (interval >= 1) {
		return interval + (interval === 1 ? ' hour' : ' hours') + ' ago';
	}
	interval = Math.floor(seconds / 60);
	if (interval >= 1) {
		return interval + (interval === 1 ? ' minute' : ' minutes') + ' ago';
	}
	return (
		Math.floor(seconds) +
		(Math.floor(seconds) === 1 ? ' second' : ' seconds') +
		' ago'
	);
};