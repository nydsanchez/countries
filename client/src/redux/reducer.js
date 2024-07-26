import {
  CREATE_ACTIVITY,
  RETRIEVE_ACTIVITIES,
  DELETE_ACTIVITY,
  RETRIEVE_COUNTRIES,
  LOAD_COUNTRY,
  SELECTED_COUNTRIES,
  DESELECTED_VALUE,
  SEARCH,
  ERROR,
  CLEAR_FILTER,
  SORT,
} from "./action-types";
const initialState = {
  country: {
    countries: [],
    regcountry: [],
    selectedCountries: [],
    countriesBK: [],
  },
  activity: [],
  filteredCountries: [],
  search: [],
  filters: {
    continent: "",
    activity: "",
  },
  sortBy: {
    key: "",
    order: "",
    sorted: false,
  },
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
        country: { ...state.country, countries: payload },
        filteredCountries: [],
        error: null,
      };

    case SORT: {
      const { sortBy, sortOrder } = payload;
      let sortedCountries = [...state.country.countries];
      if (sortBy === "country") {
        sortedCountries.sort((a, b) => {
          if (sortOrder === "asc") {
            return a.name.localeCompare(b.name);
          } else {
            return b.name.localeCompare(a.name);
          }
        });
      } else {
        sortedCountries.sort((a, b) => {
          if (sortOrder === "asc") {
            return a.population - b.population;
          } else {
            return b.population - a.population;
          }
        });
      }
      return {
        ...state,
        country: { ...state.country, countries: sortedCountries },
      };
    }

    case ERROR:
      return {
        ...state,
        error: payload,
      };

    case CLEAR_FILTER:
      return {
        ...state,
        country: {
          ...state.country,
          regcountry: [],
          selectedCountries: [],
        },
        filteredCountries: [],
        search: [],
        error: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
