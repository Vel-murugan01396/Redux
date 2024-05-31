import { combineReducers } from "redux";
import UseReducer from "./UseReducer"

const rootReducer=combineReducers({
    userList:UseReducer
})

export default rootReducer;