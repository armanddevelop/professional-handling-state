export interface ClassStateProps {
  name: string;
}
export interface StateComponent {
  error: boolean;
  loading: boolean;
  value?: string;
  confirmed?: boolean;
  deleted?: boolean;
}

export interface UseStateProps {
  name: string;
}

export interface Action {
  type: string;
  payload?: { [key: string]: string | boolean | number | null | undefined };
}

export type ReducerObject = {
  ERROR: { [key: string]: boolean | string | number | null | undefined };
  CHECK: { [key: string]: boolean | string | number | null | undefined };
  CONFIRM: { [key: string]: boolean | string | number | null | undefined };
  WRITE: { [key: string]: boolean | string | number | null | undefined };
  DELETE: { [key: string]: boolean | string | number | null | undefined };
  RETURN: { [key: string]: boolean | string | number | null | undefined };
  REGRET: { [key: string]: boolean | string | number | null | undefined };
};
export type actions = {
  [key: string]: string;
};
