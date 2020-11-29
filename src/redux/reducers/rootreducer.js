import { combineReducers } from 'redux'
import listsReducer from "./listsReducer";

const rootReducer = combineReducers({
  listsReducer,
});

export default rootReducer;
