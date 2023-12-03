import React, { ReactNode, useMemo } from "react";
import { useGlobalContext } from "@robust-ui/use-global-context";

export function ExtractStrings({
  children,
  multiLanguageSupport,
}: {
  children: ReactNode;
  multiLanguageSupport?:
    | Record<string, React.ReactNode>
    | React.ReactNode
    | string;
}) {
  const { currentGlobalLanguage } = useGlobalContext({ key: "devData" });

  return useMemo(() => {
    const strings: string[] = [];
    const otherComponents: ReactNode[] = [];
    const languageChildren =
      (multiLanguageSupport &&
        multiLanguageSupport[
          currentGlobalLanguage as keyof typeof multiLanguageSupport
        ]) ||
      multiLanguageSupport;

    const childrenArray = React.Children.toArray(children);
    childrenArray.forEach((child) => {
      if (typeof child === "string") {
        strings.push(child);
      } else {
        otherComponents.push(child);
      }
    });
    if (languageChildren && typeof languageChildren === "string") {
      strings.push(languageChildren);
    }
    return { strings, otherComponents };
  }, [children, currentGlobalLanguage, multiLanguageSupport]);
}
