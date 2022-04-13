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

export interface ChangeSidebarFilters {
	type: ActionType.CHANGE_SIDEBAR_FILTERS;
	payload: string;
}

export interface SortActivesAction {
	type: ActionType.SORT_ACTIVES;
	payload: string;
}

export type Action =
	| FetchActivesAction
	| AddFilterTagAction
	| RemoveFilterTagAction
	| FilterNameAction
	| ChangeSidebarFilters
	| SortActivesAction;
