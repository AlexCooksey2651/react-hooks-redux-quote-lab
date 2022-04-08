import { combineReducers } from "redux";
import quotesReducer from "./features/quotes/quotesSlice";

const rootReducer = combineReducers({
  quotes: quotesReducer,
});

export default rootReducer;
