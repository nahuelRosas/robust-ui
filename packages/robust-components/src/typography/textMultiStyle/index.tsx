import React, { isValidElement, ReactNode } from "react";
import { Constructor } from "@robust-ui/constructor";
import { multiStyleString } from "@robust-ui/functions";
import { Span } from "../span";
import { TextMultiStyleProps } from "./types";
import { GetRecoveryLanguage } from "@robust-ui/tools";
import { Text } from "../text";

const Component = Constructor({
  Component: "div",
});

function Factory({
  children,
  ref,
  selectorMultiStyles,
  colors,
  randomColors,
  weights,
  active = true,
  multiLanguage,
  ...props
}: TextMultiStyleProps) {
  const language = GetRecoveryLanguage();

  const multiLanguageChildren =
    multiLanguage?.[language as keyof typeof multiLanguage] || children;

  const regex = /\n/;
  const split =
    multiLanguageChildren &&
    typeof multiLanguageChildren === "string" &&
    multiLanguageChildren.split(regex);

  const response = multiStyleString({
    children: split,
    multiStyles: {
      selectorMultiStyles,
      colors,
      randomColors,
      weights,
      state: active,
    },
  });

  const processedChildren = response.map((child) => {
    if (Array.isArray(child)) {
      return child.map((child, index) => {
        if (Array.isArray(split) && child) {
          const validation = split.find((item, index) => {
            return item === child.text;
          });

          if (validation) {
            return (
              <Text
                key={index}
                p="0"
                py="0.1rem"
                color={child.colorKey}
                colorRaw={child.colorRaw}
                fontWeight={child.weights || "inherit"}
                componentName="TextMultiColor"
                userSelect
                fontSize="inherit"
                fontStyle="inherit"
                lineHeight="inherit">
                {child.text}
              </Text>
            );
          } else {
            return (
              <Span
                key={index}
                color={child.colorKey}
                colorRaw={child.colorRaw}
                fontWeight={child.weights || "inherit"}
                componentName="SpanMultiColor"
                userSelect
                fontSize="inherit"
                fontStyle="inherit"
                lineHeight="inherit">
                {child.text}
              </Span>
            );
          }
        }
      });
    } else {
      return child;
    }
  });

  return (
    <Component
      fontSize="1rem"
      whiteSpace="normal"
      componentName="ContainerTextMultiColor"
      fontStyle="normal"
      userSelect
      lineHeight="normal"
      padding="1rem"
      ref={ref}
      {...props}>
      {processedChildren}
    </Component>
  );
}

export const TextMultiStyle = React.memo(Factory);
