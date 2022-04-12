import { Action } from "../actions";
import { ActionType } from "../actions-types";
import { ActiveInfoProps } from "../../components/actives-components/ActiveInfo";

const jsonData: ActiveInfoProps[] = require("../../ACTIVEINFO.json");
const initialState = jsonData;
const activesReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.FETCH_ACTIVES:
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
export default activesReducer;
