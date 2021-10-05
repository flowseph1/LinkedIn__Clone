import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articleReducer from "./articleReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
    userState: userReducer,
    articleState: articleReducer,
    loadingState: loadingReducer,
});

export default rootReducer;
