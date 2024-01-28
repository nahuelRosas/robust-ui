import { colors, defaultTheme } from "@robust-ui/theme";
import { Span } from "@robust-ui/span";
import { Paragraph } from "@robust-ui/paragraph";
import { isValidElement } from "react";

/**
 * Assembles children into an array of React nodes.
 *
 * @param {Object} params - The parameters object.
 * @param {unknown[]} params.children - The children to be assembled.
 * @returns {React.ReactNode[]} - The assembled React nodes.
 */
export function assambleChilden({
  children,
}: {
  children: unknown[];
}): React.ReactNode[] {
  return children.map((child, index) => {
    if (!Array.isArray(child) && isValidElement(child)) {
      return child;
    } else if (typeof child === "string" || typeof child === "number") {
      return (
        <Paragraph
          key={index}
          textOverflow="inherit"
          whiteSpace="inherit"
          lineHeight="inherit"
          fontStyle="inherit"
          fontSize="inherit"
          userSelect="none"
        >
          {child.toString()}
        </Paragraph>
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
          <Paragraph
            key={index}
            fontWeight={item[0]?.fontWeights || "inherit"}
            colorRaw={item[0]?.colorRaw || "inherit"}
            color={item[0]?.colorKey || "inherit"}
            textOverflow="inherit"
            userSelect="inherit"
            lineHeight="inherit"
            whiteSpace="inherit"
            fontStyle="inherit"
            fontSize="inherit"
            p="0"
          >
            {item[0]?.text}
          </Paragraph>
        );
      }

      return item.map((item, index) => {
        return (
          <Span
            key={index}
            fontWeight={item.fontWeights || "inherit"}
            colorRaw={item.colorRaw || "inherit"}
            color={item.colorKey || "inherit"}
            textOverflow="inherit"
            whiteSpace="inherit"
            userSelect="inherit"
            lineHeight="inherit"
            fontStyle="inherit"
            fontSize="inherit"
          >
            {item.text}
          </Span>
        );
      });
    });
  });
}
