/* eslint-disable no-unused-vars */
import { useGlobalContext } from "@robust-ui/use-global-context";
import { language, languageType } from "@robust-ui/theme";

/**
 * Custom hook that provides the current language and a function to change the language.
 * @returns An array containing an object with the current language and its full name, and a function to change the language.
 */
export function useLanguage(): [
  {
    currentLanguage: languageType;
    fullnameLanguage: (typeof language)[languageType];
  },
  (language: languageType) => void,
] {
  const { currentGlobalLanguage } = useGlobalContext({ key: "devData" });
  const { changeLanguage } = useGlobalContext({ key: "devTools" });

  return [
    {
      currentLanguage: currentGlobalLanguage,
      fullnameLanguage: language[currentGlobalLanguage],
    },
    changeLanguage,
  ];
}
