import { useGlobalContext } from "@robust-ui/use-global-context";
import { ReactNode, useMemo, Children } from "react";

/**
 * Extracts strings and other components from the given children with optional multi-language support.
 *
 * @param {Object} options - The options object.
 * @param {ReactNode} options.children - The children to extract strings and components from.
 * @param {Record<string, React.ReactNode> | React.ReactNode | string} [options.multiLanguageSupport] - Optional multi-language support.
 * @returns {{ strings: string[]; otherComponents: ReactNode[] }} - The extracted strings and other components.
 */
export function useExtractString({
  children,
  multiLanguageSupport,
}: {
  children: ReactNode;
  multiLanguageSupport?:
    | Record<string, React.ReactNode>
    | React.ReactNode
    | string;
}): { strings: string[]; otherComponents: ReactNode[] } {
  const { currentGlobalLanguage } = useGlobalContext({ key: "devData" });

  return useMemo(() => {
    const strings: string[] = [];
    const otherComponents: ReactNode[] = [];
    const languageChildren =
      (multiLanguageSupport &&
        (multiLanguageSupport as Record<string, React.ReactNode>)[
          currentGlobalLanguage as keyof typeof multiLanguageSupport
        ]) ||
      multiLanguageSupport;

    const childrenArray = Children.toArray(children);
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
