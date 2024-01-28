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

/**
 * Reducer function for managing the global state.
 *
 * @param state - The current global state.
 * @param action - The action to be performed on the global state.
 * @returns The updated global state.
 */
export function GlobalStateReducer(
  state: GlobalState,
  action: unknown,
): GlobalState {
  switch ((action as Action).type) {
    case "SET_GLOBAL_STATE_VALUE": {
      const { key, value } = action as SetValueAction;
      return {
        ...state,
        [key]: value,
      };
    }
    case "RESET_GLOBAL_STATE":
      return {};

    case "REMOVE_GLOBAL_STATE_VALUE": {
      const { key } = action as SetValueAction;
      const removeKey = key;
      const { [removeKey]: removedKey, ...rest } = state;
      console.warn(removedKey);
      return rest;
    }
    default:
      return state;
  }
}
