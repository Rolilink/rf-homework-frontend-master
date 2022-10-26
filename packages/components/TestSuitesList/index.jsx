import TestSuitesListItem from "../TestSuitesListItem"

const TestSuitesList = ({ testSuites }) => (
	<div className="divide-y divide-slate-100">
		{
			testSuites.map(({ id, test_suite_name, test_plans }) => 
				<TestSuitesListItem
					key={id}
					id={id}
					test_suite_name={test_suite_name}
					test_plans={test_plans} />
			)	
		}
	</div>
);

export default TestSuitesList;