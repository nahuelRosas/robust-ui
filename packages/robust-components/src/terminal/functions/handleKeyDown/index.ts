import React, { useCallback, KeyboardEvent } from "react";
import { ProcessInput } from "../processInput";

export function HandleKeyDown({
  state,
  dispatch,
  handleSubmit,
}: {
  dispatch: React.Dispatch<any>;
  state: {
    commandHistory: string[];
    suggestedCommands: string[];
    visibleCommandIndex: number;
  };
  handleSubmit: (e: KeyboardEvent<HTMLInputElement>) => void;
}) {
  const processInput = ProcessInput({ dispatch });
  const handleKeyDown = useCallback(
    function (e: KeyboardEvent<HTMLInputElement>): void {
      if (e.key === "Tab") {
        e.preventDefault();
        if (state.suggestedCommands.length > 0 && state.suggestedCommands[0]) {
          dispatch({
            type: "SET_INPUT_VALUE",
            payload: state.suggestedCommands[0],
          });
          processInput({ inputValue: state.suggestedCommands[0] });
        }
      } else if (e.key === "ArrowUp") {
        const newIndex = Math.max(state.visibleCommandIndex - 1, 0);
        dispatch({
          type: "SET_INPUT_VALUE",
          payload: state.commandHistory[newIndex] || "",
        });
        processInput({
          inputValue: state.commandHistory[newIndex] || "",
        });
        dispatch({ type: "SET_VISIBLE_COMMAND_INDEX", payload: newIndex });
      } else if (e.key === "ArrowDown") {
        const newIndex = Math.min(
          state.visibleCommandIndex + 1,
          state.commandHistory.length
        );
        dispatch({
          type: "SET_INPUT_VALUE",
          payload: state.commandHistory[newIndex] || "",
        });
        processInput({
          inputValue: state.commandHistory[newIndex] || "",
        });
        dispatch({ type: "SET_VISIBLE_COMMAND_INDEX", payload: newIndex });
      } else if (e.key === "Enter") {
        if (state.suggestedCommands.length > 0) {
          dispatch({
            type: "SET_INPUT_VALUE",
            payload: state.suggestedCommands[0] || "",
          });
        }
        handleSubmit(e);
      } else if (e.key === "c" && e.ctrlKey) {
        e.preventDefault();
        dispatch({ type: "CLEAR_INPUT_VALUE" });
      }
    },
    [
      dispatch,
      handleSubmit,
      processInput,
      state.commandHistory,
      state.suggestedCommands,
      state.visibleCommandIndex,
    ]
  );
  return handleKeyDown;
}
