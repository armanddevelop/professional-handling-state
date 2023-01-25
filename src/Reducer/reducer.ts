import { actionTypes } from "../actionTypes/actionTypes";
import {
  StateComponent,
  Action,
  ReducerObject,
} from "../interfaces/interfaces";

// export const reducer = (state: StateComponent, action: Action) => {
//   if (action.type === "ERROR") {
//     return {
//       ...state,
//       error: true,
//       loading: false,
//     };
//   } else if (action.type === "CHECK") {
//     return {
//       ...state,
//       loading: true,
//       error: false,
//     };
//   } else {
//     return {
//       ...state,
//     };
//   }
// };

export const reducerSwitch = (state: StateComponent, action: Action) => {
  switch (action.type) {
    case actionTypes.error:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case actionTypes.check:
      return {
        ...state,
        loading: true,
        error: false,
      };

    default:
      return {
        ...state,
      };
  }
};

const reducerObject = (state: any, action: Action) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.check]: {
    ...state,
    loading: true,
    error: false,
  },
  [actionTypes.confirm]: {
    ...state,
    loading: false,
    error: false,
    confirmed: true,
  },
  [actionTypes.write]: {
    ...state,
    value: action.payload?.value,
  },
  [actionTypes.delete]: {
    ...state,
    deleted: true,
  },
  [actionTypes.return]: {
    ...state,
    confirmed: false,
    deleted: false,
    value: "",
  },
  [actionTypes.regret]: {
    ...state,
    confirmed: false,
    value: "",
  },
});

export const reducer = (state: any, action: Action) => {
  if (reducerObject(state, action)[action.type as keyof ReducerObject]) {
    return reducerObject(state, action)[action.type as keyof ReducerObject];
  } else {
    return state;
  }
};
