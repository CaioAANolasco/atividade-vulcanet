import { Card, Tag, Code, Intent } from "@blueprintjs/core";
import { type } from "os";
import "../styles/active-info-styles/active-info.scss";
import "../styles/fields-name-styles/field-names.scss";

interface ActiveInfoProps {
	activeInfo: String;
	severity: Intent;
	status: String;
	trader: String;
	counterparty: String;
	book: String;
	source: String;
}

const ActiveInfo: React.FC<ActiveInfoProps> = (props) => {
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
export type { ActiveInfoProps };
