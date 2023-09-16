import { Flex } from "@/layout";
import { Span } from "@/typography";
import React from "react";

const Title = `
██████╗  ██████╗ ██████╗ ██╗   ██╗███████╗████████╗
██╔══██╗██╔═══██╗██╔══██╗██║   ██║██╔════╝╚══██╔══╝
██████╔╝██║   ██║██████╔╝██║   ██║███████╗   ██║
██╔══██╗██║   ██║██╔══██╗██║   ██║╚════██║   ██║
██║  ██║╚██████╔╝██████╔╝╚██████╔╝███████║   ██║
╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚══════╝   ╚═╝
`;

function Factory() {
  return (
    <Flex
      flexDirection="column"
      fontSize="0.8em"
      optimizedWidth
      justifyContent="center"
    >
      <Span
        fontFamily="Courier"
        alignSelf="inherit"
        fontSize="1.5em"
        m="0%"
        p="0%"
      >
        Welcome to
      </Span>
      <Span
        as="pre"
        fontFamily="Courier"
        textAlign="justify"
        fontSize="0.9em"
        m="0%"
        whiteSpace="pre-wrap"
        p="0%"
      >
        {Title}
      </Span>
    </Flex>
  );
}

export const WelcomePage = React.memo(Factory);
