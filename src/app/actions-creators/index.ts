import {
	FetchActivesAction,
	FilterNameAction,
	FilterTagAction,
} from "../actions";
import { ActionType } from "../actions-types";

export const fetchActives = (payload: String[]): FetchActivesAction => {
	return {
		type: ActionType.FETCH_ACTIVES,
		payload: payload,
	};
};

export const filterByTag = (payload: String): FilterTagAction => {
	return {
		type: ActionType.FILTER_TAG,
		payload: payload,
	};
};

export const filterByName = (payload: String): FilterNameAction => {
	return {
		type: ActionType.FILTER_NAME,
		payload: payload,
	};
};
