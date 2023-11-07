import { colors, defaultTheme } from "@robust-ui/theme";
import React, { Suspense, lazy } from "react";

const Text = lazy(() =>
  import("@robust-ui/text").then((module) => ({ default: module.Text }))
);
const Span = lazy(() =>
  import("@robust-ui/span").then((module) => ({ default: module.Span }))
);

export function assambleChilden({
  children,
}: {
  children: unknown[];
}): React.ReactNode[] {
  return children.map((child, index) => {
    if (!Array.isArray(child) && React.isValidElement(child)) {
      return child;
    } else if (typeof child === "string" || typeof child === "number") {
      return (
        <Suspense key={index}>
          <Text
            elementName="ParagraphStyledText"
            textOverflow="inherit"
            whiteSpace="inherit"
            lineHeight="inherit"
            fontStyle="inherit"
            fontSize="inherit"
            userSelect>
            {child.toString()}
          </Text>
        </Suspense>
      );
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
          <Suspense key={index}>
            <Text
              fontWeight={item[0]?.fontWeights || "inherit"}
              colorRaw={item[0]?.colorRaw || "inherit"}
              color={item[0]?.colorKey || "inherit"}
              elementName="ParagraphStyledText"
              textOverflow="inherit"
              userSelect="inherit"
              lineHeight="inherit"
              whiteSpace="inherit"
              fontStyle="inherit"
              fontSize="inherit"
              p="0">
              {item[0]?.text}
            </Text>
          </Suspense>
        );
      }

      return item.map((item, index) => {
        return (
          <Suspense key={index}>
            <Span
              fontWeight={item.fontWeights || "inherit"}
              elementName="SpanStyledText"
              colorRaw={item.colorRaw || "inherit"}
              color={item.colorKey || "inherit"}
              textOverflow="inherit"
              whiteSpace="inherit"
              userSelect="inherit"
              lineHeight="inherit"
              fontStyle="inherit"
              fontSize="inherit"
              key={index}>
              {item.text}
            </Span>
          </Suspense>
        );
      });
    });
  });
}
