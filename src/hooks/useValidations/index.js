import { useState } from "react"

const useValidations = (validations) => {
	const [errors, setErrors] = useState([]);

	const validateSubmit = (data, cb) => {
		const _errors = [];

		const passedAllChecks = Object.keys(validations).reduce((acc, key) => {
			const passed = validations[key].fn(data[key]);

			if (!passed) _errors.push({
				field: key,
				message: validations[key].message,
			});

			return passed && acc;
		}, true);

		if (passedAllChecks) {
			return cb() && setErrors([]);
		}

		setErrors(_errors);
	}

	return ({
		validateSubmit,
		errors
	});
}

export default useValidations;