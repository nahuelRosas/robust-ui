import { useGlobalContext } from "@robust-ui/use-global-context";
import { ValueRecoverer, attributeCompleter } from "@robust-ui/css-utils";
import { useMemo } from "react";
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

    const cleanProps = Object.entries(recoveredProps as object).reduce(
      (acc, [key, value]) => {
        if (!key || !value) {
          return acc;
        } else if (
          key === "children" ||
          key === "childrenWithOutPropagation" ||
          key === "style" ||
          typeof value === "string"
        ) {
          return { ...acc, [key]: value };
        }

        const recoveredProp = ValueRecoverer({
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

        return {
          ...acc,
          [key]: recoveredProp,
        };
      },
      {},
    );
    return cleanProps as object;
  }, [
    mediaBreakpoints,
    currentGlobalLanguage,
    currentBreakpoint,
    isDarkModeActive,
    theme,
    props,
  ]);
}
