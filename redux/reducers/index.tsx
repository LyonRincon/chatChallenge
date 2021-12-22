import { combineReducers } from "redux";
import mainReducer from "./main";

export const rootReducer = combineReducers({
  mainReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
