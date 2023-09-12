import { Flex, Grid } from "@/layout";
import { Span } from "@/typography";
import { commands } from "../";
import React from "react";

function Factory() {
  return (
    <Flex
      flexDirection="column"
      fontSize="0.9em"
      optimizedWidth
      gap="0.5em"
      alignItems="flexStart"
      justifyContent="center">
      <Span>Index of commands:</Span>
      {Object.entries(commands).map(([name, { cmd, description }]) => (
        <Grid
          ml="0.5em"
          key={name}
          optimizedWidth
          gridTemplateColumns=" repeat(2, 1fr)"
          gridTemplateRows="1fr"
          gridColumnGap="0px"
          gridRowGap="0px">
          <Span color="teal300" width="10em" marginRight="0.5em">
            {cmd}
          </Span>
          <Span fontWeight="300">{description}</Span>
        </Grid>
      ))}
    </Flex>
  );
}

export const HelpPage = React.memo(Factory);
