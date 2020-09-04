import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import rootReducer from "./reducers";

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
  const store = createStore(reducer, initialStore, bindMiddleware([thunk]));

  return store;
}

export const wrapper = createWrapper(configureStore);
