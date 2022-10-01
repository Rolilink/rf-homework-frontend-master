import { useState, useCallback } from "react";
import TestPlansList from "../TestPlansList";

const TriangleIcon = ({ isOpen } ) => <span>{ isOpen ? "▼" : "▶"}</span>

// This way clicking the edit button doesn't trigger opening the test plans list
const stopPropagation = (e) => {
	e.stopPropagation();
};

const TestSuitesListItem = ({ id, test_suite_name, test_plans }) => {
	const [ isOpen, setIsOpen ] = useState(false);
	
	const toggleOpenState = useCallback(() => {
		setIsOpen((_isOpen) => !_isOpen);
	}, []);

	return (
		<div className="px-4 py-4 divide-y divide-slate-100">
			<div className="grid grid-cols-2 cursor-pointer" onClick={toggleOpenState} >
				<div>
					<TriangleIcon isOpen={isOpen} /> {test_suite_name}
				</div>
				<div className="text-right">
					<span className="mr-6">{(test_plans?.length ?? 0)} Tests</span>
					<a className="hover:underline" onClick={stopPropagation} href={`/test-suite/${id}/edit`}>Edit</a>
				</div>
			</div>
			{
				isOpen && (
					<div className="mt-4">
						<TestPlansList testPlans={test_plans} />
					</div>
				)
			}
		</div>
	);
}

export default TestSuitesListItem;