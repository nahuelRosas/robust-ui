import React, {
  useCallback,
  useRef,
  useReducer,
  ChangeEvent,
  useMemo,
} from "react";
import TerminalProps from "./types";
import { Flex } from "@/layout";
import { TermOutput } from "./termOutput";
import { commands } from "./command";
import { initialState, terminalReducer } from "./terminalReducer";
import { Action, State } from "./terminalReducer/types";
import { UpdateSuggestedCommands } from "./functions/updateSuggestedCommands";
import { HandleKeyDown } from "./functions/handleKeyDown";
import { HandleSubmit } from "./functions/handleSubmit";
import { ProcessInput } from "./functions/processInput";
import { UpdateIsValidCommand } from "./functions/updateIsValidCommand";
import { TermForm } from "./termForm";
import { useIsomorphicLayoutEffect } from "@robust-ui/hooks";

function Factory({ customCommands = [], ...props }: TerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    terminalReducer,
    initialState
  );
  const processInput = ProcessInput({ dispatch });

  const allCommands = useMemo(
    () => [...commands, ...customCommands],
    [customCommands]
  );
  const updateSuggestedCommands = UpdateSuggestedCommands({
    dispatch,
    allCommands,
  });

  const handleSubmit = HandleSubmit({
    dispatch,
    state,
  });

  const handleKeyDown = HandleKeyDown({
    dispatch,
    state,
    handleSubmit,
  });

  const updateIsValidCommand = UpdateIsValidCommand({
    dispatch,
    state,
    allCommands,
  });

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value ?? "";
      const { inputCommand } = processInput({ inputValue });
      dispatch({ type: "SET_INPUT_VALUE", payload: inputValue });
      updateSuggestedCommands(inputCommand);
    },
    [processInput, updateSuggestedCommands]
  );

  const handleContainerClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useIsomorphicLayoutEffect(() => {
    inputRef.current?.focus();
    updateIsValidCommand();
  }, [updateIsValidCommand]);

  return (
    <Flex
      padding="1.25rem"
      flexDirection="column"
      componentName="Terminal"
      color="white"
      bg="transparent"
      overflowY="auto"
      maxHRaw="calc(100vh - 2rem)"
      height="100%"
      onClick={handleContainerClick}
      ref={containerRef}
      {...props}>
      <TermOutput state={state} allCommands={allCommands} />
      <TermForm
        inputRef={inputRef}
        handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown}
        allCommands={allCommands}
        handleSubmit={handleSubmit}
        state={state}
      />
    </Flex>
  );
}

export const Terminal = React.memo(Factory);
