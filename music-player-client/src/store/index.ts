import { combineReducers, createStore } from "redux";

import appReducer from './reducers/app';

const rootReducer = combineReducers({
    app: appReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);