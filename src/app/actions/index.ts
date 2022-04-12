import { ActionType } from "../actions-types";

export interface FetchActivesAction {
	type: ActionType.FETCH_ACTIVES;
	payload: String[];
}

export interface FilterTagAction {
	type: ActionType.FILTER_TAG;
	payload: String;
}

export interface FilterNameAction {
	type: ActionType.FILTER_NAME;
	payload: String;
}

export type Action = FetchActivesAction | FilterTagAction | FilterNameAction;
