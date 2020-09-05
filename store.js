import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import rootReducer from "./reducers";
import rootSaga from "./saga";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export function configureStore(initialStore = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    initialStore,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export const wrapper = createWrapper(configureStore);
