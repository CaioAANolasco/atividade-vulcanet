import activesReducer from "./activesReducer";
import sidebarReducer from "./sidebarFiltersReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
	actives: activesReducer,
	sidebarFilters: sidebarReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
