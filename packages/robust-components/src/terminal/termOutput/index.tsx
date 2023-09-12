import React, { useRef, useState } from "react";
import { Flex } from "@/layout";
import { Span } from "@/typography";
import TermOutputProps from "./types";
import { useIsomorphicLayoutEffect } from "@robust-ui/hooks";

const ERROR_MESSAGE = "Robust: React: command not found";
const HELP_MESSAGE = 'Robust: React: try "help" for more information';

function Factory({ state, allCommands }: TermOutputProps): React.JSX.Element {
  const terminalOutputRef = useRef<HTMLDivElement>(null);
  const [components, setComponents] = useState<React.ReactNode[]>([]);

  useIsomorphicLayoutEffect(() => {
    const fadeIn = {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    };
    const Components = state.outputHistory
      .map((command, index) => {
        if (command === "") {
          return null;
        }
        const [CMD, ...args] = command.trim().split(" ");

        const validCommand = allCommands.find(({ cmd }) => cmd === CMD);

        if (!validCommand) {
          return (
            <Flex
              key={`error-${index}`}
              componentName={`TerminalLine-${CMD}`}
              flexDirection="column"
              fontSize="0.4em"
              optimizedWidth
              animationName="fadeIn"
              animationDuration="0.5s"
              animationTimingFunction="ease"
              keyframes={fadeIn}>
              <Flex
                alignSelf="flexStart"
                flexDirection="row"
                alignItems="flexStart">
                <Span>{ERROR_MESSAGE}</Span>
                <Span ml="0.5em" color="red" alignSelf="flexStart">
                  {command}
                </Span>
              </Flex>
              <Span alignSelf="flexStart">{HELP_MESSAGE}</Span>
            </Flex>
          );
        }

        const Component = validCommand?.component;

        if (!Component) {
          return null;
        }

        return (
          <Flex
            key={`component-${index}`}
            componentName={`TerminalLine-${CMD}`}
            flexDirection="column"
            optimizedWidth
            justifyContent="spaceBetween"
            animationName="fadeIn"
            animationDuration="0.5s"
            animationTimingFunction="ease"
            keyframes={fadeIn}>
            <Component args={args} />
          </Flex>
        );
      })
      .filter(Boolean);

    setComponents(Components);
  }, [state.outputHistory, allCommands]);

  useIsomorphicLayoutEffect(() => {
    scrollToBottom();
  }, [components]);

  const scrollToBottom = () => {
    if (terminalOutputRef.current) {
      const { scrollHeight, scrollTop, offsetHeight } =
        terminalOutputRef.current;
      terminalOutputRef.current.scrollTop = scrollHeight - offsetHeight;
    }
  };

  return (
    <Flex
      flexDirection="column"
      componentName="TerminalOutput"
      optimizedWidth
      ref={terminalOutputRef}
      gap="1em"
      overflowY="auto"
      maxHRaw="calc(100vh - 2rem)"
      scrollBehavior="smooth"
      overflowX="hidden"
      mb="1em">
      {components}
    </Flex>
  );
}

export const TermOutput = React.memo(Factory);
