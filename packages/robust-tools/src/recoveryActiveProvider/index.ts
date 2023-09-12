import { useGlobalContext } from "@robust-ui/hooks";
import { RobustGlobalContext } from "@robust-ui/contexts";

export function RecoveryActiveProvider(): boolean {
  const { isProviderActive } = useGlobalContext({
    providerContext: RobustGlobalContext,
  });
  if (isProviderActive) {
    return isProviderActive;
  }
  return false;
}
