import React from "react";
import { Constructor } from "@robust-ui/constructor";
import { HeaderProps } from "./types";

const Component = Constructor({
  Component: "header",
});

export function Header({ children, ref, ...props }: HeaderProps) {
  return (
    <Component
      display="flex"
      componentName="Header"
      flexDirection="row"
      padding="1rem"
      justifyContent="spaceBetween"
      alignItems="center"
      position="relative"
      width="initial"
      height="fitContent"
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
}
