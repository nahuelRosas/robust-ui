import React from "react";
import { Constructor } from "@robust-ui/constructor";
import { FormControlProps } from "./types";
import { Flex } from "@/layout";

export function FormControl({ children, ref, ...props }: FormControlProps) {
  return (
    <Flex componentName="FormControl" ref={ref} {...props}>
      {children}
    </Flex>
  );
}
