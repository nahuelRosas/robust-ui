import { valueRecoverer, attributeCompleter } from "@robust-ui/tools";
import { useGlobalContext } from "@robust-ui/use-global-context";
import { useMemo } from "react";

/**
 * Custom hook that cleans and recovers the values of the input props based on certain conditions.
 * @param props - The input props to be cleaned and recovered.
 * @param context - Optional context object containing additional information for value recovery.
 * @returns The cleaned and recovered props.
 */
export function useCleanValue({
  props,
  context,
}: {
  props: Record<string, unknown>;
  context?: {
    mediaBreakpoints: Record<string, string | number>;
    currentGlobalLanguage: string;
    currentBreakpoint: unknown;
    isDarkModeActive: boolean;
    theme: Record<string, unknown>;
  };
}) {
  const {
    mediaBreakpoints,
    currentGlobalLanguage,
    currentBreakpoint,
    isDarkModeActive,
    theme,
  } = useGlobalContext({ key: "devData" }) || context;

  return useMemo(() => {
    const recoveredProps = attributeCompleter({
      inputAttributes: props,
      mediaBreakpoints,
    });

    if (!recoveredProps) {
      return {};
    }

    const cleanProps = Object.entries(recoveredProps).reduce(
      (acc, [key, value]) => {
        if (!key || !value) {
          return acc;
        }

        if (
          key === "children" ||
          key === "childrenWithOutPropagation" ||
          key === "style" ||
          typeof value === "string"
        ) {
          return { ...acc, [key]: value };
        }

        const recoveredProp = valueRecoverer({
          currentGlobalLanguage,
          inputProp: key,
          inputValue: value,
          breakPoints: {
            current: currentBreakpoint as string,
            context: mediaBreakpoints,
          },
          darkMode: isDarkModeActive,
          theme,
        });

        return { ...acc, [key]: recoveredProp };
      },
      {}
    );

    return cleanProps;
  }, [
    mediaBreakpoints,
    currentGlobalLanguage,
    currentBreakpoint,
    isDarkModeActive,
    theme,
    props,
  ]);
}
