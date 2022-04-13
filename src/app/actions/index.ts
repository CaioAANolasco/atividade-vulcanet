import { ActionType } from "../actions-types";

export interface FetchActivesAction {
	type: ActionType.FETCH_ACTIVES;
}

export interface AddFilterTagAction {
	type: ActionType.ADD_FILTER_TAG;
	payload: string;
}

export interface RemoveFilterTagAction {
	type: ActionType.REMOVE_FILTER_TAG;
	payload: string;
}

export interface FilterNameAction {
	type: ActionType.FILTER_NAME;
	payload: string;
}

export interface FilterTagType {
	type: ActionType.FILTER_TAG_TYPE;
	payload: string;
}

export type Action =
	| FetchActivesAction
	| AddFilterTagAction
	| RemoveFilterTagAction
	| FilterNameAction;
