import {
	FetchActivesAction,
	FilterNameAction,
	AddFilterTagAction,
	RemoveFilterTagAction,
	ChangeSidebarFilters,
	SortActivesAction,
} from "../actions";
import { ActionType } from "../actions-types";
import { SortTypes } from "../../SortingFields";

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

export const changeSidebarFilters = (payload: string): ChangeSidebarFilters => {
	return {
		type: ActionType.CHANGE_SIDEBAR_FILTERS,
		payload: payload,
	};
};

export const sortActives = (payload: SortTypes): SortActivesAction => {
	return {
		type: ActionType.SORT_ACTIVES,
		payload: payload,
	};
};
