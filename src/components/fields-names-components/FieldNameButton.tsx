import { Button } from "@blueprintjs/core";
import "../styles/fields-name-styles/field-names.scss";
import { SortTypes } from "../../SortingFields";

interface FieldNameButtonProps {
	field: SortTypes;
	intent: "primary" | "none";
	handleClick: (a: SortTypes) => void;
}

const FieldNameButton = (props: FieldNameButtonProps) => {
	const fieldName = props.field === "activeInfo" ? "title" : props.field;

	return (
		<div className={`${fieldName}-field`}>
			<Button
				text={fieldName.toUpperCase()}
				onClick={() => props.handleClick(props.field)}
				minimal={true}
				intent={props.intent}
			/>
		</div>
	);
};

export default FieldNameButton;
