import { useCallback } from "react";

export function UpdateSuggestedCommands({
  allCommands,
  dispatch,
}: {
  allCommands: { cmd: string }[];
  dispatch: React.Dispatch<any>;
}) {
  const updateSuggestedCommands = useCallback(
    (input: string | undefined) => {
      if (input === "" || !input) {
        dispatch({ type: "SET_SUGGESTED_COMMANDS", payload: [] });
        return;
      }
      const filteredCommands = allCommands
        .filter(({ cmd }) => cmd.startsWith(input))
        .map(({ cmd }) => cmd);
      dispatch({ type: "SET_SUGGESTED_COMMANDS", payload: filteredCommands });
    },
    [allCommands, dispatch]
  );

  return updateSuggestedCommands;
}
