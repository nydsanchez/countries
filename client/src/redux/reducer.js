import {
  CREATE_ACTIVITY,
  RETRIEVE_ACTIVITIES,
  DELETE_ACTIVITY,
  RETRIEVE_COUNTRIES,
  LOAD_COUNTRY,
  SELECTED_COUNTRIES,
  SEARCH,
  ERROR,
  DESELECTED_VALUE,
} from "./action-types";
const initialState = {
  country: {
    countries: [],
    regcountry: [],
    selectedCountries: [],
    countriesBK: [],
  },
  activity: [],
  search: [],
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_ACTIVITY:
      return {
        ...state,
        activity: [...state.activity, payload],
        country: { ...state.country, selectedCountries: [] },
        error: null,
      };

    case RETRIEVE_ACTIVITIES:
      return {
        ...state,
        activity: payload,
        error: null,
      };

    case DELETE_ACTIVITY:
      return {
        ...state,
        activity: state.activity.filter((act) => act.id !== payload),
        error: null,
      };

    case RETRIEVE_COUNTRIES:
      return {
        ...state,
        country: { ...state.country, countries: payload, countriesBK: payload },
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

    case SELECTED_COUNTRIES:
      return {
        ...state,
        country: {
          ...state.country,
          selectedCountries: [...state.country.selectedCountries, payload],
        },
      };

    case DESELECTED_VALUE:
      return {
        ...state,
        country: {
          ...state.country,
          selectedCountries: state.country.selectedCountries.filter(
            (value) => value !== payload
          ),
        },
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
        ...state,
      };
  }
};

export default reducer;
