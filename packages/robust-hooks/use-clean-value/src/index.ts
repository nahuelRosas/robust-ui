import { useGlobalContext } from "@robust-ui/use-global-context";
import { ValueRecoverer, attributeCompleter } from "@robust-ui/css-utils";
import { useMemo } from "react";

export function useCleanValue({ props }: { props: Record<string, unknown> }) {
  const devData = useGlobalContext({ key: "devData" });

  return useMemo(() => {
    const recoveredProps = attributeCompleter({
      inputAttributes: props,
      mediaBreakpoints: devData.mediaBreakpoints,
    });

    const cleanProps = Object.entries(recoveredProps as object).reduce(
      (acc, [key, value]) => {
        const recoveredProp = ValueRecoverer({
          inputProp: key,
          inputValue: value,
          breakPoints: {
            current: devData.currentBreakpoint as string,
            context: devData.mediaBreakpoints,
          },
          darkMode: devData.isDarkModeActive,
          theme: devData.theme,
        });
        return {
          ...acc,
          [key]: recoveredProp,
        };
      },
      {}
    );

    return cleanProps as object;
  }, [devData, props]);
}
