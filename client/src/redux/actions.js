import axios from "axios";
import {
  CREATE_ACTIVITY,
  RETRIEVE_COUNTRIES,
  LOAD_COUNTRY,
  SEARCH,
  ERROR,
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

export const loadCountry = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${URL}/countries/${id}`);
    dispatch({ type: LOAD_COUNTRY, payload: data });
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
