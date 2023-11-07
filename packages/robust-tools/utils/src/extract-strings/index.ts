import React from "react";

export function extractStrings({
  children,
  multiLanguageSupport,
}: {
  children: React.ReactNode;
  multiLanguageSupport?: string;
}) {
  const strings: string[] = [];
  const otherComponents: React.ReactNode[] = [];
  const childrenArray = React.Children.toArray(children);
  childrenArray.forEach((child) => {
    if (typeof child === "string") {
      strings.push(child);
    } else {
      otherComponents.push(child);
    }
  });
  if (multiLanguageSupport) {
    strings.push(multiLanguageSupport);
  }
  return { strings, otherComponents };
}
