const getApiEndpoint = (path = '/') => (
	`${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}${path}`
);

export default getApiEndpoint;
