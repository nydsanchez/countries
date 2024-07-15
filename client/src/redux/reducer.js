import {
  CREATE_ACTIVITY,
  RETRIEVE_COUNTRY,
  ERROR,
  SEARCH,
} from "./action-types";
const initialState = {
  country: [],
  activity: [],
  search: [],
  error: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_ACTIVITY:
      return {
        ...state,
        activity: [...state.activity, payload],
        error: null,
      };

    case RETRIEVE_COUNTRY:
      return {
        ...state,
        contry: payload,
        error: null,
      };

    case SEARCH:
      return {
        ...state,
        search: payload,
        country: payload,
        error: null,
      };

    case ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return {
        state,
      };
  }
};

export default reducer;
