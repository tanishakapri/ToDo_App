import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from 'redux-thunk';

import taskReducer from "./reducers/taskReducer";
import authReducer from "./reducers/authReducer";
import weatherReducer from "./reducers/weatherReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

