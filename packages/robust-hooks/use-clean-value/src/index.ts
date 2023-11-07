import { useGlobalContext } from "@robust-ui/use-global-context";
import { ValueRecoverer, attributeCompleter } from "@robust-ui/css-utils";
import { useMemo } from "react";

export function useCleanValue({ props }: { props: Record<string, unknown> }) {
  const { mediaBreakpoints, currentGlobalLanguage, currentBreakpoint, isDarkModeActive, theme } = useGlobalContext({ key: "devData" });

  return useMemo(() => {
    const recoveredProps = attributeCompleter({
      inputAttributes: props,
      mediaBreakpoints,
    });

    const cleanProps = Object.entries(recoveredProps as object).reduce(
      (acc, [key, value]) => {
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
      {}
    );
    return cleanProps as object;
  }, [mediaBreakpoints, currentGlobalLanguage, currentBreakpoint, isDarkModeActive, theme, props]);
}
