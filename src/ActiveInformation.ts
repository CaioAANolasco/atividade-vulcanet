interface ActiveInformation {
	activeInfo: string;
	severity: "danger" | "warning" | "none";
	status: string;
	trader: string;
	counterparty: string;
	book: string;
	source: string;
}

export default ActiveInformation;
