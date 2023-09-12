import React, { useCallback, KeyboardEvent } from "react";

export function ProcessInput({ dispatch }: { dispatch: React.Dispatch<any> }) {
  const processInput = useCallback(
    function ({ inputValue }: { inputValue: string }): {
      inputCommand: string | undefined;
      inputArgs: string[];
    } {
      const trimmedInput = inputValue.trim();
      const inputCommand = trimmedInput.split(" ")[0];
      const inputArgs = trimmedInput.split(" ").slice(1);

      dispatch({ type: "SET_INPUT_COMMAND", payload: inputCommand || "" });
      dispatch({ type: "SET_INPUT_ARGS", payload: inputArgs || [] });
      return { inputCommand, inputArgs };
    },
    [dispatch]
  );
  return processInput;
}
