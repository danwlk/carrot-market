import { useState } from "react";

const useApi = (apiFunc) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const request = async (...args) => {
		setLoading(true);
		const response = await apiFunc(...args);

		setTimeout(() => {
			setLoading(false);
		}, 1000);

		if (!response.ok) return setError(true);

		setError(false);
		setData(response.data);
	};

	return { data, error, loading, request };
};

export default useApi;
