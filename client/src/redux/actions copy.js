import axios from "axios";
import {
  CREATE_ACTIVITY,
  DELETE_ACTIVITY,
  ERROR,
  LOAD_COUNTRY,
  RETRIEVE_ACTIVITIES,
  RETRIEVE_COUNTRIES,
} from "./action-types";

const URL = "http://localhost:3001";

export const createActivity = (activity) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${URL}/activities`, activity);
      dispatch({ type: CREATE_ACTIVITY, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const retrieveActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/activities`);
      dispatch({ type: RETRIEVE_ACTIVITIES, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const retrieveActivities2 = () => {
  return (dispatch) => {
    axios
      .get(`${URL}/activities`)
      .then((response) => {
        dispatch({ type: RETRIEVE_ACTIVITIES, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: error.message });
      });
  };
};

export const deleteActivity = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${URL}/activities/${id}`);
      dispatch({ type: DELETE_ACTIVITY, payload: id });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};
export const deleteActivity2 = (id) => {
  return (dispatch) => {
    axios
      .delete(`${URL}/activities/${id}`)
      .then(() => {
        dispatch({ type: DELETE_ACTIVITY, payload: id });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: error.message });
      });
  };
};

export const retrieveCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/countries`);
      dispatch({ type: RETRIEVE_COUNTRIES, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};
export const retrieveCountries2 = () => {
  return (dispatch) => {
    axios
      .get(`${URL}/countries`)
      .then((response) => {
        dispatch({ type: RETRIEVE_COUNTRIES, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: error.message });
      });
  };
};

export const loadCountry = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${URL}/country/${id}`);
    dispatch({ type: LOAD_COUNTRY, payload: data });
  };
};

export const loadCountry2 = (id) => {
  return (dispatch) => {
    axios
      .get(`${URL}/country/${id}`)
      .then((response) => {
        dispatch({ type: LOAD_COUNTRY, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: error.message });
      });
  };
};

export const setSelectedCountries = (value) => {
  return {
    type: SELECTED_COUNTRIES,
    payload: value,
  };
};

export const deselectedValue = (value) => {
  return {
    type: DESELECTED_VALUE,
    payload: value,
  };
};

export const search = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/countries/name?name=${name}`);
      dispatch({ type: SEARCH, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const clearData = () => {
  return {
    type: CLEAR_DATA,
  };
};

export const sortData = (sortBy, sortOrder) => {
  return {
    type: SORT,
    payload: { sortBy: sortBy, sortOrder: sortOrder },
  };
};

export const applyFilter = (filterType, filterValue) => {
  return {
    type: APPLY_FILTER,
    payload: { filterType: filterType, filterValue: filterValue },
  };
};

export const resetFilter = (filterType, filterValue) => ({
  type: RESET_FILTER,
  payload: { filterType: filterType, filterValue: filterValue },
});
