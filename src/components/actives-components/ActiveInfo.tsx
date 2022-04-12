import { Card, Tag, Code } from "@blueprintjs/core";
import "../styles/active-info-styles/active-info.scss";
import "../styles/fields-name-styles/field-names.scss";
import ActiveInformation from "../../ActiveInformation";

const ActiveInfo: React.FC<ActiveInformation> = (props) => {
	return (
		<Card className="active-display">
			<p className="title-field">{props.activeInfo}</p>
			<div className="severity-field">
				<Tag intent={props.severity}></Tag>
			</div>

			<div className="status-field">
				<Code>{props.status}</Code>
			</div>

			<h5 className="trader-field">{props.trader}</h5>
			<h5 className="counterparty-field ">{props.counterparty}</h5>
			<h5 className="book-field ">{props.book}</h5>
			<h5 className="source-field ">{props.source}</h5>
		</Card>
	);
};

export default ActiveInfo;
