import { useReducer, useEffect } from "react";
import { actionTypes } from "../actionTypes/actionTypes";
import { reducer } from "../Reducer/reducer";

const initialState = {
  error: false,
  value: "",
  loading: false,
  confirmed: false,
  deleted: false,
};
const SECURITY_CODE: string = "paradigma";
export const useHookReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading } = state;
  useEffect(() => {
    const { loading, value } = state;
    if (loading && value !== undefined) {
      setTimeout(() => {
        value.trim().toLocaleLowerCase() !== SECURITY_CODE
          ? dispatch({ type: actionTypes.error })
          : dispatch({ type: actionTypes.confirm });
      }, 3000);
    }
  }, [loading]);
  return { state, dispatch };
};
