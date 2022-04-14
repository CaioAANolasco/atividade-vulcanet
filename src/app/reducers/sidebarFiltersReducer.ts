import { Action } from "../actions";
import { ActionType } from "../actions-types";
import producer from "immer";

// Redux reducer for saving filter properties searched by user

interface FiltersState {
	filterInput: string;
}

const initialState: FiltersState = {
	filterInput: "",
};

const sidebarReducer = producer(
	(filtersState: FiltersState = initialState, action: Action) => {
		switch (action.type) {
			case ActionType.CHANGE_SIDEBAR_FILTERS:
				//Update filtered status from user input
				filtersState.filterInput = action.payload.toLowerCase();
				return filtersState;
			default:
				return filtersState;
		}
	},
	initialState
);
export default sidebarReducer;
