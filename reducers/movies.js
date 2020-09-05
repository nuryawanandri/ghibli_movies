import { HYDRATE } from "next-redux-wrapper";

export const GET_MOVIES_REQUEST = "movies/GET_MOVIES_REQUEST";
export const GET_MOVIES_SUCCESS = "movies/GET_MOVIES_SUCCESS";
export const GET_MOVIES_ERROR = "movies/GET_MOVIES_ERROR";

export const initialState = {
  isLoading: false,
  films: [],
  errorMessage: "",
};

export const moviesReducers = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        films: action.payload,
      };

    case GET_MOVIES_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
