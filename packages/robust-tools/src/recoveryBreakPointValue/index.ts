import { useGlobalContext } from "@robust-ui/hooks";
import { RobustGlobalContext } from "@robust-ui/contexts";

export function RecoveryBreakPointValue(): string {
  const { breakpointValue } = useGlobalContext({
    providerContext: RobustGlobalContext,
  });

  if (breakpointValue) {
    return breakpointValue;
  }

  return "base";
}
