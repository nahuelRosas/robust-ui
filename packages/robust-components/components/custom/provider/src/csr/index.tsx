import { GlobalStateReducer } from "@robust-ui/global-state-reducer";
import { useBreakpointValue } from "@robust-ui/use-breakpoint-value";
import { ProviderProps, ForwardRefExoticProvider } from "./types";
import { CreateComponent } from "@robust-ui/constructor";
import {
  GlobalContext,
  GlobalContextValues,
  notification,
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
} from "react";
import { ToastManager } from "@robust-ui/toast-manager";

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
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const [globalStateDev, dispatchDev] = useReducer(GlobalStateReducer, {});
    const [globalStateUser, dispatchUser] = useReducer(GlobalStateReducer, {});
    const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(false);
    const [currentGlobalLanguage, setCurrentGlobalLanguage] =
      useState<keyof typeof Language>("en");

    const [notifications, setNotifications] = useState<notification[]>([]);

    const Component = CreateComponent({
      ComponentType: "main",
    });

    const currentBreakpoint = useBreakpointValue({
      breakPoints: mediaBreakpointsCustom || mediaBreakpoints,
    });

    const changeLanguage = useCallback(function (
      language: keyof typeof Language,
    ): void {
      setCurrentGlobalLanguage(language);
    }, []);

    const toggleDarkMode = useCallback(function (
      darkMode: boolean | ((prevState: boolean) => boolean),
    ): void {
      setIsDarkModeActive(darkMode);
    }, []);

    const setAppState = useCallback(function (
      key: string,
      value: unknown,
      isDev: boolean = false,
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
      [globalStateDev, globalStateUser],
    );
    const resetAppState = useCallback((isDev: boolean = false) => {
      if (isDev) {
        dispatchDev({ type: "RESET_GLOBAL_STATE" });
      }
      dispatchUser({ type: "RESET_GLOBAL_STATE" });
    }, []);

    const setNotificationState = useCallback(function (
      notification: notification,
    ): void {
      setNotifications((prevState) => [...prevState, notification]);
    }, []);

    const resetNotificationState = useCallback(function (): void {
      setNotifications([]);
    }, []);

    const removeNotificationState = useCallback(function (
      notificationId: string,
    ): void {
      setNotifications((prevState) =>
        prevState.filter((notification) => notification.id !== notificationId),
      );
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
          setNotificationState,
          resetNotificationState,
          removeNotificationState,
        },
        userContext: {
          globalState: globalStateUser,
          getAppState,
          setAppState,
          resetAppState,
        },
        notifications,
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
      setNotificationState,
      resetNotificationState,
      removeNotificationState,
      globalStateUser,
      notifications,
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
          {...props}
        >
          {children}
          <ToastManager notification={notifications} />
        </Component>
      </GlobalContext.Provider>
    );
  });

export const Provider = React.memo(Factory);
