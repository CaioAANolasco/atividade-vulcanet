import { Action } from "../actions";
import { ActionType } from "../actions-types";
import ActiveInformation from "../../ActiveInformation";
import producer from "immer";

const jsonData: ActiveInformation[] = require("../../ACTIVEINFO.json");
const initialState = jsonData;
const activesReducer = producer((state = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.FETCH_ACTIVES:
			return state;
		case ActionType.FILTER_TAG:
			//sort by price
			return state;
		case ActionType.FILTER_NAME:
			const filterInput = action.payload;
			let filteredValues = state.filter((active: ActiveInformation) => {
				return active.activeInfo.toLowerCase().includes(filterInput);
			});
			state = filteredValues;
			return state;
		default:
			return state;
	}
});
export default activesReducer;
