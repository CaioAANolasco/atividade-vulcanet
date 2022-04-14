import { Card, Tag } from "@blueprintjs/core";
import "../styles/active-info-styles/active-info.scss";
import "../styles/fields-name-styles/field-names.scss";
import ActiveInformation from "../../ActiveInformation"; // Active information interface comes from separate file for reusability.

// Component for actives information card, with title, severity, status, trader, counterparty, book, source.

const ActiveInfo: React.FC<ActiveInformation> = (props) => {
	return (
		<Card className="active-display">
			<p className="title-field">{props.activeInfo}</p>
			<div className="severity-field">
				<Tag intent={props.severity}></Tag>
			</div>

			<div className="status-field">
				<Tag className={`status-tag`}>{props.status}</Tag>
			</div>

			<h5 className="trader-field">{props.trader}</h5>
			<h5 className="counterparty-field ">{props.counterparty}</h5>
			<h5 className="book-field ">{props.book}</h5>
			<h5 className="source-field ">{props.source}</h5>
		</Card>
	);
};

export default ActiveInfo;
