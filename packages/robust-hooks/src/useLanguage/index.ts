import { useGlobalContext } from "../useGlobalContext";
import { RobustGlobalContext } from "@robust-ui/contexts";
import { Language } from "@robust-ui/theme";

export function useLanguage(): [
  string,
  (language: keyof typeof Language) => void,
] {
  const { globalLanguage, changeLanguage } = useGlobalContext({
    providerContext: RobustGlobalContext,
  });

  return [globalLanguage, changeLanguage] as [
    string,
    (language: keyof typeof Language) => void,
  ];
}
