import { Action } from "../actions";
import { ActionType } from "../actions-types";

const initialState = {};
const filterStore = (state = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.FETCH_ACTIVES:
			//sort alphabetically
			return state;
		case ActionType.FILTER_TAG:
			//sort by price
			return state;
		case ActionType.FILTER_NAME:
			return state;
		default:
			return state;
	}
};
export default filterStore;
