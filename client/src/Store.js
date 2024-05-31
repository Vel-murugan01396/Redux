//in store js 
// createStore id deprecrated
// so we have to use 
// import {legacy_createStore as createStore} from "redux";
//  import { createStore} from "redux";  you put this get error



import {legacy_createStore as createStore} from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from "./rootReducer";


const Store=createStore(rootReducer,composeWithDevTools());// this line get connect with store to rootreducer
export default Store;