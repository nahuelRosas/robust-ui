import { useGlobalContext } from "@robust-ui/use-global-context";
import { Language } from "@robust-ui/theme";

export function useLanguage(): [
  {
    currentLanguage: keyof typeof Language;
    fullLanguage: (typeof Language)[keyof typeof Language];
  },
  (language: keyof typeof Language) => void,
] {
  const devData = useGlobalContext({ key: "devData" });
  const devTools = useGlobalContext({ key: "devTools" });
  const { changeLanguage } = devTools;
  const { currentGlobalLanguage } = devData;

  const fullLanguage = Language[currentGlobalLanguage];

  return [
    { currentLanguage: currentGlobalLanguage, fullLanguage },
    changeLanguage,
  ];
}
