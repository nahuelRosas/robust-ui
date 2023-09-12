import React, { useCallback, KeyboardEvent, FormEvent } from "react";

export function HandleSubmit({
  state,
  dispatch,
}: {
  dispatch: React.Dispatch<any>;
  state: {
    commandHistory: string[];
    suggestedCommands: string[];
    visibleCommandIndex: number;
    inputValue: string;
    inputCommand: string;
    inputArgs: string[];
    outputHistory: string[];
  };
}) {
  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const newCommandHistory = [...state.commandHistory, state.inputValue];
      const newOutputHistory = [...state.outputHistory, state.inputValue];

      dispatch({
        type: "SET_COMMAND_AND_OUTPUT_HISTORY",
        payload: {
          commandHistory: newCommandHistory,
          outputHistory: newOutputHistory,
        },
      });

      dispatch({
        type: "SET_LAST_COMMAND",
        payload: {
          command: state.inputCommand,
          date: new Date(),
        },
      });

      dispatch({ type: "SET_INPUT_VALUE", payload: "" });

      dispatch({
        type: "SET_VISIBLE_COMMAND_INDEX",
        payload: newCommandHistory.length,
      });
      dispatch({ type: "CLEAR_INPUT_VALUE" });

      if (state.inputCommand === "clear" || state.inputCommand === "cls") {
        dispatch({ type: "CLEAR_OUTPUT" });
      }
    },
    [
      dispatch,
      state.commandHistory,
      state.inputCommand,
      state.inputValue,
      state.outputHistory,
    ]
  );

  return handleSubmit;
}
