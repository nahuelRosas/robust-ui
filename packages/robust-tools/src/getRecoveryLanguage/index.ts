import { useGlobalContext } from "@robust-ui/hooks";
import { RobustGlobalContext } from "@robust-ui/contexts";
import { Language } from "@robust-ui/theme";

export function GetRecoveryLanguage() {
  const { globalLanguage: globalLanguage } = useGlobalContext({
    providerContext: RobustGlobalContext,
  });

  if (globalLanguage) {
    return globalLanguage;
  }

  return Language["en"];
}
