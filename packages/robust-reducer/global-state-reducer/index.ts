import { GlobalState, Action, SetValueAction } from "./src/types";

export function GlobalStateReducer(
  state: GlobalState,
  action: unknown,
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
    default:
      return state;
  }
}
