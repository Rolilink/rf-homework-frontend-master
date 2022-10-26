import { useState, useEffect } from "react";
import getApiEndpoint from "../../libs/getApiEndpoint";

const API_ENDPOINT_PATH = '/test_suites';

const useTestSuitesData = () => {
	const [testSuites, setTestSuites] = useState([]);
	const [isFetching, setIsFetching] = useState(true); // optimistically fetching

	const fetchData = async () => {
		const response = await fetch(getApiEndpoint(API_ENDPOINT_PATH));
		const data = await response.json();
		setIsFetching(false);
		setTestSuites(data);
	};

	useEffect(() => {
		fetchData(); 
	}, []);

	return ({
		testSuites,
		isFetching,
	});
}

export default useTestSuitesData;