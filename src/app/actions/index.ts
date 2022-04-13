import { ActionType } from "../actions-types";

export interface FetchActivesAction {
	type: ActionType.FETCH_ACTIVES;
}

export interface AddFilterTagAction {
	type: ActionType.ADD_FILTER_TAG;
	payload: string;
}

export interface FilterNameAction {
	type: ActionType.FILTER_NAME;
	payload: string;
}

export type Action = FetchActivesAction | AddFilterTagAction | FilterNameAction;
