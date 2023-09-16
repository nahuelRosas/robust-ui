import { Span } from "@/typography";
import React from "react";
import { DrawerHeaderProps } from "./types";

function Factory({ children, ...props }: DrawerHeaderProps) {
  return (
    <Span
      componentName="DrawerHeader"
      fontSize="1rem"
      alignSelf="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      optimizedWidth
      {...props}
    >
      {children}
    </Span>
  );
}

export const DrawerHeader = React.memo(Factory);
