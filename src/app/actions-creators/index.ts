import {
	FetchActivesAction,
	FilterNameAction,
	AddFilterTagAction,
	RemoveFilterTagAction,
} from "../actions";
import { ActionType } from "../actions-types";

export const fetchActives = (): FetchActivesAction => {
	return {
		type: ActionType.FETCH_ACTIVES,
	};
};

export const addFilterByTag = (payload: string): AddFilterTagAction => {
	return {
		type: ActionType.ADD_FILTER_TAG,
		payload: payload,
	};
};

export const removeFilterByTag = (payload: string): RemoveFilterTagAction => {
	return {
		type: ActionType.REMOVE_FILTER_TAG,
		payload: payload,
	};
};

export const filterByName = (payload: string): FilterNameAction => {
	return {
		type: ActionType.FILTER_NAME,
		payload: payload,
	};
};
