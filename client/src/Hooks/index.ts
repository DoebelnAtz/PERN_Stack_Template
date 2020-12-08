import { RefObject, useContext, useEffect, useRef, useState } from 'react';
import  api  from '../Api';
import { useHistory } from 'react-router';
import { isEqual } from 'lodash';
import { useDeepCompareMemoize } from '../Utils';

// custom hook for easy modal dismissal
export const useDismiss = (
	refInside: RefObject<HTMLDivElement | null>,
	close: () => void,
) => {
	const handleEsc = (e: KeyboardEvent) => {
		if (e.key !== 'Escape') return;
		else {
			e.preventDefault();
			// esc by default stops the page from refreshing,
			// this is not a problem but causes a small delay when pressing.
			close();
		}
	};
	const handleClick = (e: MouseEvent) => {
		let target = e.target as HTMLDivElement;
		if (refInside?.current?.contains(target)) return;
		else close();
	};
	useEffect(() => {
		document.addEventListener('keydown', handleEsc);
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('keydown', handleEsc);
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);
};

// A hook that helps with checking if a component is mounted,
// used to check if a component is still mounted before updating a state
export const useMounted = () => {
	const isMounted = useRef(false);

	useEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, []);
	return isMounted;
};

export function useGet<F>(
	url: string,
	variables= {},
	conditional = true,
) {
	const [data, setData] = useState<F>();const resp = useRef<any>(null);
	const history = useHistory();
	const mounted = useMounted();
	const propsVariablesMemoized = useDeepCompareMemoize(variables);

	useEffect(() => {
		async function request() {
			try {
				resp.current = await api.get(url, variables);
				if (mounted.current) {
					setData(resp.current);
				}
			} catch (e) {
				if (!e.response) {
				} else if (e.response.status === 401) {
					localStorage.clear();
					console.log('unauth');
					history.push(`/login?next=${history.location.pathname}`);
				}
			} finally {
				if (mounted.current) {
				}
			}
		}
		if (conditional && mounted.current) request();
	}, [url, conditional, propsVariablesMemoized]);
	return [data, setData] as const;
}