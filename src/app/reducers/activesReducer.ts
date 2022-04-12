import { Action } from "../actions";
import { ActionType } from "../actions-types";
import ActiveInformation from "../../ActiveInformation";
import producer from "immer";

const jsonData: ActiveInformation[] = require("../../ACTIVEINFO.json");
const initialState = jsonData;
const activesReducer = producer(
	(
		activesState = { actives: initialState, tags: [], input: "" },
		action: Action
	) => {
		switch (action.type) {
			case ActionType.FETCH_ACTIVES:
				return activesState;
			case ActionType.FILTER_TAG:
				//sort by price
				return activesState;
			case ActionType.FILTER_NAME:
				const filterInput = action.payload;
				let filteredValues = activesState.actives.filter(
					(active: ActiveInformation) => {
						return active.activeInfo
							.toLowerCase()
							.includes(filterInput);
					}
				);

				activesState.actives = filteredValues;
				return activesState;
			default:
				return activesState;
		}
	}
);
export default activesReducer;
