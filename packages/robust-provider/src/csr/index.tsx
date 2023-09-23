import { GlobalStateReducer } from "@robust-ui/global-state-reducer";
import { useBreakpointValue } from "@robust-ui/use-breakpoint-value";
import { ProviderProps, ForwardRefExoticProvider } from "./types";
import { CreateComponent } from "@robust-ui/constructor";
import {
  GlobalContext,
  GlobalContextValues,
} from "@robust-ui/use-global-context";
import {
  mediaBreakpoints,
  commands,
  defaultTheme,
  cssReset,
  selectors,
  Language,
} from "@robust-ui/theme";
import React, {
  Ref,
  useMemo,
  forwardRef,
  useState,
  useReducer,
  useCallback,
  useEffect,
} from "react";
import { debounce } from "@robust-ui/utils";

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticProvider> =
  forwardRef<unknown, ProviderProps>(function ImageComponent(
    {
      scrollBarColorCustom = {
        thumb: "rgba(255, 255, 255, 0.1)",
        track: "rgba(255, 255, 255, 0.2)",
      },
      mediaBreakpointsCustom,
      cssResetCustom,
      commandsCustom,
      themeCustom,
      children,
      ...props
    },
    ref: Ref<unknown>
  ): React.JSX.Element {
    const [globalStateDev, dispatchDev] = useReducer(GlobalStateReducer, {});
    const [globalStateUser, dispatchUser] = useReducer(GlobalStateReducer, {});
    const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(false);
    const [currentGlobalLanguage, setCurrentGlobalLanguage] =
      useState<keyof typeof Language>("en");

    const Component = CreateComponent({
      ComponentType: "main",
    });

    const currentBreakpoint = useBreakpointValue({
      breakPoints: mediaBreakpointsCustom || mediaBreakpoints,
    });

    const changeLanguage = useCallback(function (
      language: keyof typeof Language
    ): void {
      setCurrentGlobalLanguage(language);
    }, []);

    const toggleDarkMode = useCallback(function (
      darkMode: boolean | ((prevState: boolean) => boolean)
    ): void {
      setIsDarkModeActive(darkMode);
    }, []);

    const setAppState = useCallback(function (
      key: string,
      value: unknown,
      isDev: boolean = false
    ): void {
      if (isDev) {
        dispatchDev({ type: "SET_GLOBAL_STATE_VALUE", key, value });
      }
      dispatchUser({ type: "SET_GLOBAL_STATE_VALUE", key, value });
    }, []);

    const getAppState = useCallback(
      function (isDev: boolean = false) {
        return isDev ? globalStateDev : globalStateUser;
      },
      [globalStateDev, globalStateUser]
    );
    const resetAppState = useCallback((isDev: boolean = false) => {
      if (isDev) {
        dispatchDev({ type: "RESET_GLOBAL_STATE" });
      }
      dispatchUser({ type: "RESET_GLOBAL_STATE" });
    }, []);

    useEffect(() => {
      const timeout = setTimeout(() => {
        const styleDocument = document.getElementById("robust-ui");
        const currentUrl = window.location.href;

        if (styleDocument) {
          const dataToStore = {
            url: currentUrl,
            styleDocument: styleDocument.outerHTML,
          };

          const dataToStoreString = JSON.stringify(dataToStore);

          localStorage.setItem(currentUrl, dataToStoreString);
        }
      }, 5000);

      return () => clearTimeout(timeout);
    }, []);

    const memoizedGlobalContextValue: GlobalContextValues = useMemo(() => {
      return {
        devData: {
          globalState: globalStateDev,
          isProviderActive: true,
          currentGlobalLanguage,
          currentBreakpoint,
          isDarkModeActive,
          mediaBreakpoints: mediaBreakpointsCustom || mediaBreakpoints,
          cssReset: cssResetCustom || cssReset,
          commands: {
            ...commands,
            ...commandsCustom,
          },
          theme: {
            ...defaultTheme,
            ...themeCustom,
          },
          selectors: {
            ...selectors,
            ...commandsCustom,
          },
        },
        devTools: {
          toggleDarkMode,
          changeLanguage,
          getAppState,
          setAppState,
          resetAppState,
        },
        userContext: {
          globalState: globalStateUser,
          getAppState,
          setAppState,
          resetAppState,
        },
      };
    }, [
      globalStateDev,
      currentGlobalLanguage,
      currentBreakpoint,
      isDarkModeActive,
      mediaBreakpointsCustom,
      cssResetCustom,
      commandsCustom,
      themeCustom,
      toggleDarkMode,
      changeLanguage,
      getAppState,
      setAppState,
      resetAppState,
      globalStateUser,
    ]);

    return (
      <GlobalContext.Provider value={memoizedGlobalContextValue}>
        <Component
          ref={ref}
          elementName="Provider"
          fontFamily="Manrope"
          display="flex"
          flexDirection="column"
          width="100vw"
          height="100vh"
          position="fixed"
          top="0"
          left="0"
          overflow="hidden"
          webkitScrollbar={{
            width: "0.3rem",
            height: "0.5rem",
            backgroundColorRaw: scrollBarColorCustom.thumb,
            borderRadius: "0.5rem",
            zIndexRaw: 99999,
          }}
          webkitScrollbarThumb={{
            backgroundColorRaw: scrollBarColorCustom.track,
            borderRadius: "0.5rem",
            zIndexRaw: 99999,
          }}
          scrollbarColorRaw={scrollBarColorCustom}
          scrollbarWidth="thin"
          {...props}>
          {children}
        </Component>
      </GlobalContext.Provider>
    );
  });

export const Provider = React.memo(Factory);
