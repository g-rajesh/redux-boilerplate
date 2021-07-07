import { combineReducers } from "redux";
import detailsReducer from "./detailsReducer";

export default combineReducers({
     details: detailsReducer,
});
