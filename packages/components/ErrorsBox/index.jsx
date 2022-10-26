const ErrorsBox = ({ errors }) => {
	
	if (!errors || errors.length === 0) return;

	return (
		<ul className="p-6 bg-slate-100 rounded mb-4">
			{errors.map((error) => <li>- {error.message}</li>)}
		</ul>
	)
};

export default ErrorsBox;