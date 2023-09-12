// Memoized components
export interface Command {
  command: string;
  date: Date;
}

export type Action =
  | { type: "SET_LAST_COMMAND"; payload: Command }
  | { type: "SET_INPUT_VALUE"; payload: string }
  | { type: "SET_COMMAND_HISTORY"; payload: string[] }
  | { type: "SET_OUTPUT_HISTORY"; payload: string[] }
  | { type: "SET_VISIBLE_COMMAND_INDEX"; payload: number }
  | { type: "SET_SUGGESTED_COMMANDS"; payload: string[] }
  | { type: "SET_IS_VALID_COMMAND"; payload: boolean }
  | { type: "SET_INPUT_COMMAND"; payload: string }
  | { type: "SET_INPUT_ARGS"; payload: string[] }
  | { type: "CLEAR_OUTPUT" }
  | { type: "CLEAR_INPUT_VALUE" }
  | {
      type: "SET_COMMAND_AND_OUTPUT_HISTORY";
      payload: {
        commandHistory: string[];
        outputHistory: string[];
      };
    };

export interface State {
  lastCommand: Command;
  inputValue: string;
  commandHistory: string[];
  outputHistory: string[];
  visibleCommandIndex: number;
  suggestedCommands: string[];
  isValidCommand: boolean;
  inputCommand: string;
  inputArgs: string[];
}
