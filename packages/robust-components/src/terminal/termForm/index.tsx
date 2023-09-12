import { Form } from "@/form";
import { Input } from "@/input";
import { Flex } from "@/layout";
import { Span } from "@/typography";
import { TermInfo } from "../termInfo";
import React from "react";
import TermFormProps from "./types";

function Factory({
  handleSubmit,
  state,
  allCommands,
  inputRef,
  handleInputChange,
  handleKeyDown,
}: TermFormProps): React.JSX.Element {
  return (
    <Form onSubmit={handleSubmit} width="100%" componentName="TerminalForm">
      <TermInfo
        invalidCommand={
          state.lastCommand &&
          !allCommands.find(
            ({ cmd }: { cmd: string }) =>
              cmd === state.lastCommand.command && cmd !== ""
          )
        }
        date={state.lastCommand.date}
      />
      <Flex
        optimizedWidth
        flexDirection="row"
        alignItems="center"
        pt="0.5em"
        minH="1.5em">
        <Input
          focus={{ outline: "none" }}
          opacity="0"
          position="absolute"
          pointerEvents="none"
          optimizedWidth
          title="terminal-input"
          type="text"
          componentName="TerminalInput"
          autoComplete="off"
          spellCheck={false}
          autoFocus
          autoCapitalize="off"
          ref={inputRef}
          value={state.inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <Span
          optimizedHeight
          fontFamily="Fira Code"
          color={state.isValidCommand ? "green" : "brightPink"}
          fontWeight="bold">
          {state.inputCommand}
        </Span>
        {state.inputValue !== "" &&
          state.inputValue !== state.suggestedCommands[0] && (
            <Span
              optimizedHeight
              color="blueGray"
              fontWeight="bold"
              fontFamily="Fira Code"
              ml={state.inputArgs.length > 0 ? "0.25em" : "0%"}>
              {state.inputArgs.length > 0
                ? state.inputArgs.join(" ")
                : state.suggestedCommands[0]?.slice(state.inputValue.length)}
            </Span>
          )}
      </Flex>
    </Form>
  );
}

export const TermForm = React.memo(Factory);
