import { colors, defaultTheme } from "@robust-ui/theme";
import { Text } from "@robust-ui/text";
import { Span } from "@robust-ui/span";
import React from "react";

export function assambleChilden({
  children,
}: {
  children: unknown[];
}): React.ReactNode[] {
  return children.map((child, index) => {
    if (!Array.isArray(child) && React.isValidElement(child)) {
      return child;
    }
    const arrayChild = child as {
      text: string;
      colorKey: keyof typeof colors;
      colorRaw: string;
      fontWeights: keyof typeof defaultTheme.fontWeight;
    }[][];

    return arrayChild.map((item, index) => {
      if (item.length === 1) {
        return (
          <Text
            fontWeight={item[0]?.fontWeights || "inherit"}
            colorRaw={item[0]?.colorRaw}
            color={item[0]?.colorKey}
            elementName="ParagraphStyledText"
            lineHeight="inherit"
            fontStyle="inherit"
            fontSize="inherit"
            key={index}
            userSelect
            p="0"
          >
            {item[0]?.text}
          </Text>
        );
      }

      return item.map((item, index) => {
        return (
          <Span
            fontWeight={item.fontWeights || "inherit"}
            elementName="SpanStyledText"
            colorRaw={item.colorRaw}
            color={item.colorKey}
            lineHeight="inherit"
            fontStyle="inherit"
            fontSize="inherit"
            key={index}
            userSelect
          >
            {item.text}
          </Span>
        );
      });
    });
  });
}
