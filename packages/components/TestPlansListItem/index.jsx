import { useCallback } from "react";
import Action from "../Action";
const TestPlanListItem = ({ index, test_name, browser, instruction_count, withActions, onDelete, onEdit }) => {

	const onDeleteClick = useCallback(() => {
		onDelete(index);
	}, [ index, onDelete ]);

	const onEditClick = useCallback(() => {
		onEdit(index);
	}, [ index, onEdit ]);

	return (
		<div className="px-4 py-4 grid grid-cols-4">
			<div>
				{test_name}
			</div>
			<div className="text-right"> {browser} </div>
			<div className="text-right">{instruction_count} Steps</div>
			{
				withActions && (
					<div className="text-right">
						<Action className="mr-3" onClick={onEditClick}>Edit</Action>
						<Action onClick={onDeleteClick}>Delete</Action>
					</div>
				)
			}
		</div>
	);
}

export default TestPlanListItem;