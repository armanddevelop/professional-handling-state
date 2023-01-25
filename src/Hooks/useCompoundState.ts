import { useEffect, useState } from "react";
import { StateComponent } from "../interfaces/interfaces";

const SECURITY_CODE = "paradigma";
const initialState: StateComponent = {
  error: false,
  value: "",
  loading: false,
  confirmed: false,
  deleted: false,
};
export const useCompountState = () => {
  const [compundState, setCompundState] =
    useState<StateComponent>(initialState);
  const { loading } = compundState;
  useEffect(() => {
    const { loading, value } = compundState;
    if (loading && value !== undefined) {
      setTimeout(() => {
        value.trim().toLocaleLowerCase() !== SECURITY_CODE
          ? setCompundState({
              ...compundState,
              loading: false,
              error: true,
            })
          : setCompundState({
              ...compundState,
              loading: false,
              error: false,
              confirmed: true,
            });
      }, 3000);
    }
  }, [loading]);

  return { compundState, setCompundState };
};
