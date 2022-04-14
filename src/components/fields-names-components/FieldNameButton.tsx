import { Button } from "@blueprintjs/core";
import "../styles/fields-name-styles/field-names.scss";
import { useAppSelector } from "../../app/hooks";
import { SortTypes } from "../../SortingFields"; // Sorting types are derived from a proper interface that is also reused.

// Separate components to display active information column titles, and implement sorting criteria changing logic.

interface FieldNameButtonProps {
	field: SortTypes;
	intent: "primary" | "none"; // intent is used to display selected and unselected fields
	handleClick: (a: SortTypes) => void; // handle click function derived from parent; makes proper dispatch action to change state
}

const FieldNameButton = (props: FieldNameButtonProps) => {
	const fieldName = props.field === "activeInfo" ? "title" : props.field;
	const { sortOrder } = useAppSelector((state) => state.actives);

	return (
		<div className={`${fieldName}-field`}>
			<Button
				text={fieldName.toUpperCase()}
				onClick={() => props.handleClick(props.field)}
				minimal={true}
				intent={props.intent}
				className={"filter-button"}
				rightIcon={
					props.intent === "primary" &&
					(sortOrder === 1 ? "caret-up" : "caret-down")
				} //if field is selected, change color and display down caret icon
			/>
		</div>
	);
};

export default FieldNameButton;
