export interface Action {
  type: string;
}

export interface SetValueAction extends Action {
  key: string;
  value: unknown;
}

export interface GlobalState {
  [key: string]: unknown;
}
