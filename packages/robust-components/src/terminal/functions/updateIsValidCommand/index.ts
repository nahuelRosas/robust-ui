import { useCallback, useRef } from "react";

export function UpdateIsValidCommand({
  allCommands,
  dispatch,
  state,
}: {
  allCommands: { cmd: string }[];
  dispatch: React.Dispatch<any>;
  state: {
    inputCommand: string;
  };
}): () => void {
  const value = useRef(state.inputCommand);
  const updateIsValidCommand = useCallback(
    function (): void {
      if (value.current === state.inputCommand) return;
      value.current = state.inputCommand;
      const isValidCommand = !!allCommands.find(
        ({ cmd }) => cmd === state.inputCommand
      );
      dispatch({ type: "SET_IS_VALID_COMMAND", payload: isValidCommand });
    },
    [allCommands, dispatch, state.inputCommand]
  );
  return updateIsValidCommand;
}
