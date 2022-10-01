import TestPlansListItem from "../TestPlansListItem"

const TestPlansList = ({ testPlans, withActions, onDelete, onEdit }) => (
	<div className="divide-y divide-slate-100">
		{
		testPlans.map(({ test_name, browser, instruction_count }, index) => 
			<TestPlansListItem
				withActions={withActions}
				onDelete={onDelete}
				onEdit={onEdit}
				index={index}
				key={index}
				test_name={test_name}
				browser={browser}
				instruction_count={instruction_count}
			/>
		)	
	}
	</div>
);

export default TestPlansList;