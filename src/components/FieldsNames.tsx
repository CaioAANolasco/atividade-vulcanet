import { Card, Icon } from "@blueprintjs/core";
import "./styles/fields-name-styles/field-names.scss";

const FieldsNames = () => {
	return (
		<Card className="field-name-container">
			<h5 className="title-field">TITLE</h5>
			<div className="severity-field">
				<Icon icon="error" intent="primary" />
				<Icon icon="caret-down" intent="primary" />
			</div>
			<h5 className="status-field">STATUS</h5>
			<h5 className="trader-field">TRADER</h5>
			<h5 className="counterparty-field">COUNTERPARTY</h5>
			<h5 className="book-field">BOOK</h5>
			<h5 className="source-field">SOURCE</h5>
		</Card>
	);
};

export default FieldsNames;
