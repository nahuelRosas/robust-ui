import { GlobalState, Action, SetValueAction } from "./types";
export * from "./types";
export function GlobalStateReducer(
  state: GlobalState,
  action: unknown
): GlobalState {
  switch ((action as Action).type) {
    case "SET_GLOBAL_STATE_VALUE":
      const { key, value } = action as SetValueAction;
      return {
        ...state,
        [key]: value,
      };
    case "RESET_GLOBAL_STATE":
      return {};

    case "REMOVE_GLOBAL_STATE_VALUE":
      const { key: removeKey } = action as SetValueAction;
      const { [removeKey]: _, ...rest } = state;
      return rest;
    default:
      return state;
  }
}
