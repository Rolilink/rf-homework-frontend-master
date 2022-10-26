import { useState } from "react";
import Field from "@rainforesthq/components/Field";
import Action from "@rainforesthq/components/Action";
import BrowserSelect from "@rainforesthq/components/BrowserSelect";
import useValidations from "../../../hooks/useValidations";
import ErrorsBox from "@rainforesthq/components/ErrorsBox";

const validations = {
	test_name: {
		fn: (name) => name && name.length > 0,
		message: "Name is a required field.", 
	},
	instruction_count: {
		fn: (count) => count && count > 0,
		message: "Instruction Count should be 1 or more.", 
	},
}

const TestPlanEditForm = ({ testPlan, index, onSubmit, onCancel }) => {
	const [_testPlan, setTestPlan] = useState( testPlan );
	const  { errors, validateSubmit } = useValidations(validations);

	const updateTestPlan = (e) => {
		const field = e.target.name;

		setTestPlan((rTestPlan) => ({
			...rTestPlan,
			[field]: e.target.value,
		}));
	};

	const submitTestPlan = () => validateSubmit(_testPlan, () => {
		onSubmit(index, _testPlan);
	});


	return (
		<div className="py-4">
			<ErrorsBox errors={errors} />
			<div className="flex flex-row justify-between items-center">
				<Field type="text" label="Name:" name="test_name" value={_testPlan.test_name} onChange={updateTestPlan} />
				<BrowserSelect type="text" label="Browser:" name="browser" value={_testPlan.browser} onChange={updateTestPlan} />
				<Field type="number" label="Instruction Count:" name="instruction_count" value={_testPlan.instruction_count} onChange={updateTestPlan} />
				<Action id="save-btn" onClick={submitTestPlan}>Save</Action>
			</div>
		</div>
	)
};

export default TestPlanEditForm;