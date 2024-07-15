import {
  CREATE_ACTIVITY,
  RETRIEVE_COUNTRIES,
  LOAD_COUNTRY,
  SEARCH,
  ERROR,
} from "./action-types";
const initialState = {
  country: {
    countries: [],
    regcountry: [],
  },
  activity: [],
  search: [],
  error: "",
};
/* countries: {
    country: [],
    selectedCountries: [],
    countryBK: [],
  },
**/

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_ACTIVITY:
      return {
        ...state,
        activity: [...state.activity, payload],
        error: null,
      };

    case RETRIEVE_COUNTRIES:
      return {
        ...state,
        contry: { ...state.country, countries: payload },
        error: null,
      };

    case LOAD_COUNTRY:
      return {
        ...state,
        country: {
          ...state.country,
          regcountry: payload,
        },
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
