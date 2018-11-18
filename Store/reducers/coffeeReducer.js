import * as actionTypes from "../actions/types";
import { ActionSheet } from "native-base";

const initialState = {
  coffeeshops: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COFFEESHOPS:
      return {
        ...state,
        coffeeshops: action.payload,
        loading: false
      };
    case actionTypes.COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default reducer;
