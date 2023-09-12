import { Icon } from "@/icon";
import { Flex } from "@/layout";
import { Span } from "@/typography";
import React from "react";
import TermInfoProps from "./types";

function Factory({
  invalidCommand,
  date,
  children,
}: TermInfoProps): React.JSX.Element {
  const timeString = React.useMemo(() => date.toLocaleTimeString(), [date]);
  return (
    <Flex
      flexDirection="row"
      justifyContent="spaceBetween"
      width="100%"
      componentName="TerminalInfo">
      <Flex componentName="TerminalInfo-Left" pr="0.5em">
        <Flex
          bLeftRadius="5px"
          background="gray900"
          transform="skew(-20deg)"
          br="2px solid white"
          componentName="TerminalInfo-SystemIcon">
          <Icon p="0.5em" type="react" transform="skew(20deg)" size="1rem" />
        </Flex>
        <Flex
          background="gray900"
          transform="skew(-20deg)"
          bRightRadius="5px"
          componentName="TerminalInfo-HomeIcon">
          <Icon p="0.5em" type="home" transform="skew(20deg)" size="1rem" />
          <Span m="auto" pr="1em" fontSize="1em" transform="skew(20deg)">
            ~
          </Span>
        </Flex>
      </Flex>
      {children}
      <Flex justifyContent="flexEnd" componentName="TerminalInfo-Right">
        <Flex
          bLeftRadius="5px"
          background="gray900"
          transform="skew(-20deg)"
          br="2px solid white"
          componentName="TerminalInfo-ValidateIcon">
          <Icon
            type={invalidCommand ? "x" : "tick"}
            color={invalidCommand ? "red600" : "green600"}
            transform="skew(20deg)"
            size="1rem"
            p="0.5em"
          />
        </Flex>
        <Flex
          background="gray900"
          transform="skew(-20deg)"
          bRightRadius="5px"
          width="maxContent"
          componentName="TerminalInfo-Clock">
          <Span
            m="auto"
            pr="0%"
            p="0.5em"
            fontSize="0.8em"
            transform="skew(20deg)">
            at {timeString}
          </Span>
          <Icon p="0.5em" type="clock" transform="skew(20deg)" size="1rem" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export const TermInfo = React.memo(Factory);
