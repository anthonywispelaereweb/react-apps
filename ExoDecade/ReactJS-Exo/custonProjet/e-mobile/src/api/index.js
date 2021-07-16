import config from './../constants/index';

import { useState } from 'react';
const useHttp = (requestConfig, applyData) => {
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState(null);
	const sendRequest = async () => {
		setIsloading(true)

		try {
			const response = await fetch(config.url + requestConfig.path, {
				method: requestConfig.method ?requestConfig.method : 'GET',
				headers: requestConfig.headers ? requestConfig.headers : {},
				body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
			})
			if (!response.ok) {
				throw new Error("Aucunes catérogies n'ont été traouve");
			}
			const data = await response.json();
			console.log('requestConfig data', data)

			applyData(data);
			
		}catch (error) {
			setError(error.message);
			console.log('erreur', error)
		}
		setIsloading(false)
	}
	return {
		isLoading,
		error,
		sendRequest
	}
};

export default useHttp;