import { Action } from "../actions";
import { ActionType } from "../actions-types";
import ActiveInformation from "../../ActiveInformation";
import producer from "immer";
import { SortTypes } from "../../SortingFields";

//Redux reducer for saved actives, including also sorting field such as search input and tags for actives

const jsonData: ActiveInformation[] = require("../../ACTIVEINFO.json");
const initialStateActiveData = jsonData;

interface ActivesState {
	actives: ActiveInformation[];
	tagsFilter: string[];
	inputFilter: string;
	sortBy: SortTypes;
	sortOrder: 0 | 1 | -1;
}

// Initial actives state: no filters, actives sorted by severity status
const initialState: ActivesState = {
	actives: initialStateActiveData,
	tagsFilter: [],
	inputFilter: "",
	sortBy: "severity",
	sortOrder: 1,
};

const activesReducer = producer(
	(activesState: ActivesState = initialState, action: Action) => {
		switch (action.type) {
			case ActionType.FETCH_ACTIVES:
				// Return state with current actives
				return activesState;
			case ActionType.ADD_FILTER_TAG:
				// Add tag filter to array of tags
				activesState.tagsFilter.push(action.payload.toLowerCase());
				return activesState;
			case ActionType.REMOVE_FILTER_TAG:
				// Remove tag from array of tags
				activesState.tagsFilter = activesState.tagsFilter.filter(
					(t) => t !== action.payload.toLowerCase()
				);
				return activesState;
			case ActionType.FILTER_NAME:
				// Update search field according to user input
				activesState.inputFilter = action.payload.toLowerCase();
				return activesState;
			case ActionType.SORT_ACTIVES:
				// Update sorting criteria according to user's choice
				activesState.sortBy = action.payload;
				return activesState;
			case ActionType.CHANGE_SORT_ORDER:
				activesState.sortOrder = action.payload;
				return activesState;
			default:
				return activesState;
		}
	},
	initialState
);
export default activesReducer;
