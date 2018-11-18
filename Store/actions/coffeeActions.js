import * as actionTypes from "./types";

import axios from "axios";

export const getCoffeeShops = () => {
  return dispatch => {
    dispatch(setCoffeeShopsLoading());
    axios
      .get("http://coffee.q8fawazo.me/api/?format=json")
      .then(res => res.data)
      .then(coffees =>
        dispatch({
          type: actionTypes.GET_COFFEESHOPS,
          payload: coffees
        })
      );
  };
};

export const setCoffeeShopsLoading = () => ({
  type: actionTypes.COFFEESHOPS_LOADING
});
