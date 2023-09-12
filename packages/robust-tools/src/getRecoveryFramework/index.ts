import { useGlobalContext } from "@robust-ui/hooks";
import { RobustGlobalContext } from "@robust-ui/contexts";

export function GetRecoveryFramework(): string | null {
  const { framework } = useGlobalContext({
    providerContext: RobustGlobalContext,
  });
  return framework || null;
}
