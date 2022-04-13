import { Action } from "../actions";
import { ActionType } from "../actions-types";
import producer from "immer";

interface FiltersState {
	filterInput: string;
}

const initialState: FiltersState = {
	filterInput: "",
};

const activesReducer = producer(
	(filtersState: FiltersState = initialState, action: Action) => {
		switch (action.type) {
			case ActionType.CHANGE_SIDEBAR_FILTERS:
				filtersState.filterInput = action.payload;
				return filtersState;
			default:
				return filtersState;
		}
	},
	initialState
);
export default activesReducer;