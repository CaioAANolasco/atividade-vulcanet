import { Intent } from "@blueprintjs/core";

interface ActiveInformation {
	activeInfo: string;
	severity: Intent;
	status: string;
	trader: string;
	counterparty: string;
	book: string;
	source: string;
}

export default ActiveInformation;
