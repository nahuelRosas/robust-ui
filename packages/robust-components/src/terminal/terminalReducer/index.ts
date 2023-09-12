import { State, Action } from "./types";

const initialCommandHistory = ["welcome"];

export const initialState: State = {
  lastCommand: {
    command: initialCommandHistory[0] || "",
    date: new Date(),
  },
  inputValue: "",
  commandHistory: initialCommandHistory,
  outputHistory: initialCommandHistory,
  visibleCommandIndex: initialCommandHistory.length - 1,
  suggestedCommands: [],
  isValidCommand: false,
  inputCommand: "",
  inputArgs: [],
};

export function terminalReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_LAST_COMMAND":
      return { ...state, lastCommand: action.payload };
    case "SET_INPUT_VALUE":
      return { ...state, inputValue: action.payload };
    case "SET_COMMAND_HISTORY":
      return { ...state, commandHistory: action.payload };
    case "SET_OUTPUT_HISTORY":
      return { ...state, outputHistory: action.payload };
    case "SET_VISIBLE_COMMAND_INDEX":
      return { ...state, visibleCommandIndex: action.payload };
    case "SET_SUGGESTED_COMMANDS":
      return { ...state, suggestedCommands: action.payload };
    case "SET_IS_VALID_COMMAND":
      return { ...state, isValidCommand: action.payload };
    case "SET_INPUT_COMMAND":
      return { ...state, inputCommand: action.payload };
    case "SET_INPUT_ARGS":
      return { ...state, inputArgs: action.payload };
    case "SET_COMMAND_AND_OUTPUT_HISTORY":
      return {
        ...state,
        commandHistory: action.payload.commandHistory,
        outputHistory: action.payload.outputHistory,
      };
    case "CLEAR_INPUT_VALUE":
      return { ...state, inputValue: "", inputArgs: [], inputCommand: "" };

    case "CLEAR_OUTPUT":
      return { ...state, outputHistory: [] };
    default:
      return state;
  }
}
