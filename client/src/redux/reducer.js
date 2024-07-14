import { CREATE_ACTIVITY, RETRIEVE_COUNTRY, ERROR } from "./action-types";
const initialState = {
  country: [],
  activity: [],
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
