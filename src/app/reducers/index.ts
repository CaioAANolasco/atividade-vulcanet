import activesReducer from "./activesReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
	actives: activesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
