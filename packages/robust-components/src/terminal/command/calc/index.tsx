import { Flex } from "@/layout";
import { evaluateExpression } from "@/terminal/functions/evaluateExpression";
import { Span } from "@/typography";
import { useIsomorphicLayoutEffect } from "@robust-ui/hooks";
import React, { useCallback, useRef } from "react";

function Factory({ args }: { args: string[] }) {
  const historyRef = useRef<
    Array<{ argument: string; result: string; error: boolean }>
  >([]);

  const calculate = useCallback(() => {
    try {
      const calculatedResult = evaluateExpression({
        expression: args.join(""),
      });

      const newEntry = {
        argument: args.join(""),
        result: "",
        error: false,
      };

      if (
        Number.isNaN(calculatedResult) ||
        !Number.isFinite(calculatedResult)
      ) {
        newEntry.error = true;
        newEntry.result = "Error: Invalid result";
      } else {
        newEntry.result = `Result: ${calculatedResult}`;
      }

      historyRef.current.push(newEntry);
    } catch (e) {
      const newEntry = {
        argument: args.join(""),
        result: "",
        error: true,
      };

      if (e instanceof Error) newEntry.result = `Error: ${e.message}`;
      else newEntry.result = `Error: ${e}`;

      historyRef.current.push(newEntry);
    }
  }, [args]);

  useIsomorphicLayoutEffect(() => {
    calculate();
  }, [calculate, args]);

  const lastEntry = historyRef.current[historyRef.current.length - 1];
  const isLastEntryMatching = lastEntry && lastEntry.argument === args.join("");
  const error = lastEntry && lastEntry.error;
  return (
    <Flex
      flexDirection="column"
      fontSize="0.9em"
      optimizedWidth
      alignItems="flexStart"
      justifyContent="flexStart"
    >
      <Flex>
        <Span marginRight="0.5em">Expression:</Span>
        <Span>{args.join("")}</Span>
      </Flex>
      {isLastEntryMatching && (
        <Flex>
          <Span color={error ? "red" : "green"}>{lastEntry.result}</Span>
        </Flex>
      )}
    </Flex>
  );
}

export const CalcPage = Factory;
