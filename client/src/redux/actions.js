import axios from "axios";
import { CREATE_ACTIVITY, RETRIEVE_COUNTRY, ERROR } from "./action-types";

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

export const retrieveCountry = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/countries`);
      dispatch({ type: RETRIEVE_COUNTRY, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};
