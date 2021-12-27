import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import ReduxThunk from "redux-thunk";

import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger, ReduxThunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
