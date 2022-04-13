import { Button } from "@blueprintjs/core";
import "../styles/fields-name-styles/field-names.scss";
import { SortTypes } from "../../SortingFields";
import { useAppSelector } from "../../app/hooks";

interface FieldNameButtonProps {
	field: SortTypes;
	intent: "primary" | "none";
	handleClick: (a: SortTypes) => void;
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
				}
			/>
		</div>
	);
};

export default FieldNameButton;
