export interface ClassStateProps {
  name: string;
}
export interface StateComponent {
  error: boolean;
  loading: boolean;
  value: string;
  active?: boolean;
  delete?: boolean;
}

export interface UseStateProps {
  name: string;
}
