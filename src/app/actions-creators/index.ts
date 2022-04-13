import {
	FetchActivesAction,
	FilterNameAction,
	FilterTagAction,
} from "../actions";
import { ActionType } from "../actions-types";

export const fetchActives = (): FetchActivesAction => {
	return {
		type: ActionType.FETCH_ACTIVES,
	};
};

export const filterByTag = (payload: string): FilterTagAction => {
	return {
		type: ActionType.FILTER_TAG,
		payload: payload,
	};
};

export const filterByName = (payload: string): FilterNameAction => {
	return {
		type: ActionType.FILTER_NAME,
		payload: payload,
	};
};
