import activesReducer from "./activesReducer";
import { combineReducers } from "redux";
import counterReducer from "../../features/counter/counterSlice";

const reducers = combineReducers({
	counter: counterReducer,
	actives: activesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
