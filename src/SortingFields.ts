export enum SortingFields {
	ACTIVE_INFO = "activeInfo",
	SEVERITY = "severity",
	STATUS = "status",
	TRADER = "trader",
	COUNTERPARTY = "counterparty",
	BOOK = "book",
	SOURCE = "source",
}

export type SortTypes =
	| "activeInfo"
	| "severity"
	| "status"
	| "trader"
	| "counterparty"
	| "book"
	| "source";
