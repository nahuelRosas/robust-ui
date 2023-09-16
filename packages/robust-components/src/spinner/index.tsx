import React from "react";
import { Flex } from "../layout";
import { models } from "./models";
import { SpinnerProps } from "./types";

export function Spinner({
  size = "5rem",
  color = "mulberry",
  altColor = "gray900",
  model = "C",
  width,
  height,
  ...props
}: SpinnerProps) {
  const modelSelected = models({
    color,
    altColor,
    model,
  });

  return (
    <Flex
      componentName="Wrap"
      backgroundColor="transparent"
      justifyContent="center"
      alignItems="center"
      widthRaw={size || width}
      heightRaw={size || height}
    >
      <Flex
        componentName="Spinner"
        width="inherit"
        height="inherit"
        color={color}
        {...modelSelected}
        {...props}
      />
    </Flex>
  );
}
