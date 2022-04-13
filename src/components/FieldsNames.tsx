import { Card, Icon } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import { sortActives } from "../app/actions-creators";
import "./styles/fields-name-styles/field-names.scss";
import { SortingFields, SortTypes } from "../SortingFields";

const FieldsNames = () => {
	const dispatch = useDispatch();
	const handleClick = (sortField: SortTypes) => {
		dispatch(sortActives(sortField));
	};

	return (
		<Card className="field-name-container">
			<h5
				className="title-field"
				onClick={(e) => handleClick(SortingFields.ACTIVE_INFO)}
			>
				TITLE
			</h5>
			<div
				className="severity-field"
				onClick={(e) => handleClick(SortingFields.SEVERITY)}
			>
				<Icon icon="error" intent="primary" />
				<Icon icon="caret-down" intent="primary" />
			</div>
			<h5
				className="status-field"
				onClick={(e) => handleClick(SortingFields.STATUS)}
			>
				STATUS
			</h5>
			<h5
				className="trader-field"
				onClick={(e) => handleClick(SortingFields.TRADER)}
			>
				TRADER
			</h5>
			<h5
				className="counterparty-field"
				onClick={(e) => handleClick(SortingFields.COUNTERPARTY)}
			>
				COUNTERPARTY
			</h5>
			<h5
				className="book-field"
				onClick={(e) => handleClick(SortingFields.BOOK)}
			>
				BOOK
			</h5>
			<h5
				className="source-field"
				onClick={(e) => handleClick(SortingFields.SOURCE)}
			>
				SOURCE
			</h5>
		</Card>
	);
};

export default FieldsNames;
