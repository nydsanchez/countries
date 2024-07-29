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
  CLEAR_DATA,
  SORT,
  APPLY_FILTER,
  RESET_FILTER,
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
    activity: [],
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

      let sortedCountries =
        state.filteredCountries && state.filteredCountries.length > 0
          ? [...state.filteredCountries]
          : [...state.country.countries];

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
        filteredCountries:
          state.filteredCountries && state.filteredCountries.length > 0
            ? sortedCountries
            : [],
      };
    }

    case APPLY_FILTER: {
      const { filterType, filterValue } = payload;
      let newFilters = { ...state.filters };

      if (filterType === "continent") {
        newFilters.continent = filterValue;
      } else if (filterType === "activity") {
        if (newFilters.activity.includes(filterValue)) {
          newFilters.activity = newFilters.activity.filter(
            (activity) => activity !== filterValue
          );
        } else {
          newFilters.activity.push(filterValue);
        }
      }

      let filteredCountries = state.country.countries;

      if (newFilters.continent) {
        filteredCountries = filteredCountries.filter(
          (country) =>
            newFilters.continent === "All" ||
            country.continent.includes(newFilters.continent)
        );
      }

      if (newFilters.activity.length > 0) {
        filteredCountries = filteredCountries.filter(
          (country) =>
            country.Activities &&
            newFilters.activity.every((activity) =>
              country.Activities.some((act) => act.id === activity)
            )
        );
      }

      return {
        ...state,
        country: { ...state.country, countries: filteredCountries },
        filteredCountries,
        filters: newFilters,
      };
    }

    case RESET_FILTER: {
      const { filterType, filterValue } = payload;
      let newFilters = { ...state.filters };
      console.log("estoy en el reducer y el value es: ", filterValue);
      if (filterType === "continent") {
        newFilters.continent = "";
      } else if (filterType === "activity") {
        newFilters.activity = newFilters.activity.filter(
          (activity) => activity !== filterValue
        );
      }

      let filteredCountries = state.country.countriesBK;

      if (newFilters.continent) {
        filteredCountries = filteredCountries.filter(
          (country) =>
            newFilters.continent === "All" ||
            country.continent.includes(newFilters.continent)
        );
      }

      if (newFilters.activity.length > 0) {
        filteredCountries = filteredCountries.filter(
          (country) =>
            country.Activities &&
            newFilters.activity.every((activity) =>
              country.Activities.some((act) => act.id === activity)
            )
        );
      }

      return {
        ...state,
        country: {
          ...state.country,
          regcountry: [],
          selectedCountries: [],
          countries: state.country.countriesBK,
        },
        filteredCountries,
        filters: newFilters,
      };

      /*
       return {
        ...state,
        
        filteredCountries: ,
        search: [],
        error: null,
        filters: { ...state.filters, continent: "", activity: [] },
      };
      */
    }

    case ERROR:
      return {
        ...state,
        error: payload,
      };

    case CLEAR_DATA:
      return {
        ...state,
        country: {
          ...state.country,
          regcountry: [],
          selectedCountries: [],
          countries: state.country.countriesBK,
        },
        filteredCountries: [],
        search: [],
        error: null,
        filters: { ...state.filters, continent: "", activity: [] },
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
