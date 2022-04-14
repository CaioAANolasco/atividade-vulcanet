import { Action } from "../actions";
import { ActionType } from "../actions-types";
import ActiveInformation from "../../ActiveInformation";
import producer from "immer";
import { SortTypes } from "../../SortingFields";

const jsonData: ActiveInformation[] = require("../../ACTIVEINFO.json");
const initialStateActiveData = jsonData;

interface ActivesState {
	actives: ActiveInformation[];
	tagsFilter: string[];
	inputFilter: string;
	sortBy: SortTypes;
	sortOrder: 0 | 1 | -1;
}

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
				return activesState;
			case ActionType.ADD_FILTER_TAG:
				activesState.tagsFilter.push(action.payload.toLowerCase());
				console.log(activesState.tagsFilter);
				return activesState;
			case ActionType.REMOVE_FILTER_TAG:
				activesState.tagsFilter = activesState.tagsFilter.filter(
					(t) => t !== action.payload.toLowerCase()
				);
				return activesState;
			case ActionType.FILTER_NAME:
				activesState.inputFilter = action.payload.toLowerCase();
				return activesState;
			case ActionType.SORT_ACTIVES:
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
