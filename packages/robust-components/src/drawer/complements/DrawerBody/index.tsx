import { Flex } from "@/layout";
import React from "react";
import { DrawerBodyProps } from "./types";

function Factory({ children, ...props }: DrawerBodyProps) {
  return (
    <Flex
      componentName="DrawerBody"
      fontSize="2rem"
      alignSelf="flexStart"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flexStart"
      optimizedWidth
      optimizedHeight
      {...props}>
      {children}
    </Flex>
  );
}

export const DrawerBody = React.memo(Factory);
