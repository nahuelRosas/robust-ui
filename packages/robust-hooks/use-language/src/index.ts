import { useGlobalContext } from "@robust-ui/use-global-context";
import { Language } from "@robust-ui/theme";

export function useLanguage(): [
  {
    currentLanguage: keyof typeof Language;
    fullnameLanguage: (typeof Language)[keyof typeof Language];
  },
  (language: keyof typeof Language) => void,
] {
  const { currentGlobalLanguage } = useGlobalContext({ key: "devData" });
  const { changeLanguage } = useGlobalContext({ key: "devTools" });

  return [
    {
      currentLanguage: currentGlobalLanguage,
      fullnameLanguage: Language[currentGlobalLanguage],
    },
    changeLanguage,
  ];
}
