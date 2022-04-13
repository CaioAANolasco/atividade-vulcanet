import { Action } from "../actions";
import { ActionType } from "../actions-types";
import ActiveInformation from "../../ActiveInformation";
import producer from "immer";

const jsonData: ActiveInformation[] = require("../../ACTIVEINFO.json");
const initialStateActiveData = jsonData;

interface ActivesState {
	actives: ActiveInformation[];
	tagsFilter: string[];
	inputFilter: string;
	sortBy: string;
}

const initialState: ActivesState = {
	actives: initialStateActiveData,
	tagsFilter: [],
	inputFilter: "",
	sortBy: "",
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
				return activesState;
			default:
				return activesState;
		}
	},
	initialState
);
export default activesReducer;
