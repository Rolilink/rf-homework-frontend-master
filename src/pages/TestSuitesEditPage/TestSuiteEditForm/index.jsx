import { useState } from "react";
import Field from "../../../components/Field";
import Action from "../../../components/Action";
import TestPlansList from "../../../components/TestPlansList";
import TestPlanEditForm from "../TestPlanEditForm";
import useValidations from "../../../hooks/useValidations";
import ErrorsBox from "../../../components/ErrorsBox";

const validations = {
	test_suite_name: {
		fn: (test_suite_name) => test_suite_name && test_suite_name.length > 0,
		message: "Name is a required field.", 
	},
}

const TestSuiteEditForm = ({ testSuite, onSubmit }) => {
	const [_testSuite, setTestSuite] = useState( testSuite );
	const [planBeingEditedIndex, setPlanBeingEdited] = useState( -1 );
	const { errors, validateSubmit } = useValidations(validations);
	
	const updateTestSuite = (e) => {
		const field = e.target.name;

		setTestSuite((rTestSuite) => ({
			...rTestSuite,
			[field]: e.target.value,
		}));
	};

	const deletePlan = (index) => {
		setTestSuite((rTestSuite) => {
		const newTestPlans = [ ...rTestSuite.test_plans ];
		
		newTestPlans.splice(index, 1);

			return ({
				...rTestSuite,
				test_plans: newTestPlans,
			})
		});
	};

	const editPlan = (index, changes) => {
		setTestSuite((rTestSuite) => {
		const newTestPlans = [ ...rTestSuite.test_plans ];
		
		newTestPlans[index] = {
			...newTestPlans[index],
			...changes,
		};

			return ({
				...rTestSuite,
				test_plans: newTestPlans,
			})
		});

		setPlanBeingEdited(-1);
	};

	const addPlan = () => {
		setTestSuite((rTestSuite) => {
			const newTestPlans = [ ...rTestSuite.test_plans ];
			
			newTestPlans.push({
        test_name: "New Test",
        browser: "chrome", // default browser
        instruction_count: 1
      });

			// automatically open that one
			setPlanBeingEdited(newTestPlans.length - 1);
	
			return ({
				...rTestSuite,
				test_plans: newTestPlans,
			})
		});
	}

	const startEditingPlan = (index) => setPlanBeingEdited(index);

	const submitPlan = () => (validateSubmit(_testSuite, () => onSubmit(_testSuite)));
	
	return (
		<div className="divide-y divide-slate-100">
			{	planBeingEditedIndex === -1 && (
				<div className="my-4">
					<ErrorsBox errors={errors} />
					<Field type="text" label="Name" name="test_suite_name" value={_testSuite.test_suite_name} onChange={updateTestSuite} />
				</div>
			)}
			<div className="flex flex-col divide-y divide-slate-100">
				<div className="py-3 flex flex-row justify-between items-center">
					<span className="text-lg font-bold"> { planBeingEditedIndex === -1 ? "Test Plans" : "Editing Test Case"}</span>
				{	planBeingEditedIndex === -1 && <Action onClick={addPlan} className="ml-3">+ Add Test Plan</Action>}
				</div>
				<div>
					{
						planBeingEditedIndex === -1 ? (
							<TestPlansList testPlans={_testSuite.test_plans } withActions onDelete={deletePlan} onEdit={startEditingPlan} />
						) : (
							<TestPlanEditForm onSubmit={editPlan} index={planBeingEditedIndex} testPlan={_testSuite.test_plans[planBeingEditedIndex]} />
						)
					}
				</div>
				{
					planBeingEditedIndex === -1 && (
						<div className="py-2 pl-2">
							<Action id="save-btn" onClick={submitPlan} className="mr-4">Save</Action>
							<a className="hover:underline" href="/">Back</a>
						</div>
					)
				}
			</div>
		</div>

	);
};

export default TestSuiteEditForm;