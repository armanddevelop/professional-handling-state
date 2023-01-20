import { useEffect, useState } from "react";
import { StateComponent } from "../interfaces/interfaces";

const SECURITY_CODE = "paradigma";
const initialState: StateComponent = {
  error: false,
  value: "",
  loading: false,
  active: false,
  delete: false,
};
export const useCompountState = () => {
  const [compundState, setCompundState] =
    useState<StateComponent>(initialState);
  const { loading } = compundState;
  useEffect(() => {
    const { loading, value } = compundState;
    if (loading) {
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
            });
      }, 3000);
    }
  }, [loading]);

  return { compundState, setCompundState };
};
