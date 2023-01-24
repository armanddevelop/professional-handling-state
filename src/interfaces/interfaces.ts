export interface ClassStateProps {
  name: string;
}
export interface StateComponent {
  error: boolean;
  loading: boolean;
  value: string;
  confirmed?: boolean;
  deleted?: boolean;
}

export interface UseStateProps {
  name: string;
}
