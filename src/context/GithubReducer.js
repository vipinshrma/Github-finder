import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_REPOS,
  GET_SINGLE_USER,
} from "./actionTypes";

export const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
