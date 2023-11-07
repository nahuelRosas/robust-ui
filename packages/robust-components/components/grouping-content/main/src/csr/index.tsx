import { GlobalStateReducer } from "@robust-ui/global-state-reducer";
import { useBreakpointValue } from "@robust-ui/use-breakpoint-value";
import { ProviderProps } from "./types";
import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { ToastManager } from "@robust-ui/toast-manager";
import {
  GlobalContextValues,
  GlobalContext,
  notification,
} from "@robust-ui/use-global-context";
import {
  mediaBreakpoints,
  defaultTheme,
  selectors,
  commands,
  cssReset,
  Language,
} from "@robust-ui/theme";
import React, {
  startTransition,
  useCallback,
  forwardRef,
  useReducer,
  useEffect,
  useState,
  useMemo,
  Ref,
} from "react";

const Factory: React.ForwardRefExoticComponent<
  ForwardRefExotic<ProviderProps>
> = forwardRef(function ProviderComponent(
  {
    scrollBarColorCustom = {
      thumb: "rgba(255, 255, 255, 0.1)",
      track: "rgba(255, 255, 255, 0.2)",
    },
    mediaBreakpointsCustom,
    notificationPlacement,
    cssResetCustom,
    commandsCustom,
    themeCustom,
    children,
    ...props
  },
  ref
): React.JSX.Element {
  const [globalStateDev, dispatchDev] = useReducer(GlobalStateReducer, {});
  const [globalStateUser, dispatchUser] = useReducer(GlobalStateReducer, {});
  const [globalNotification, dispatchNotification] = useReducer(
    GlobalStateReducer,
    {}
  );
  const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(false);
  const [currentGlobalLanguage, setCurrentGlobalLanguage] =
    useState<keyof typeof Language>("en");

  const Component = CreateComponent({
    componentType: "main",
  });

  const currentBreakpoint = useBreakpointValue({
    breakPoints: mediaBreakpointsCustom || mediaBreakpoints,
  });

  const changeLanguage = useCallback(function (
    language: keyof typeof Language
  ): void {
    startTransition(() => setCurrentGlobalLanguage(language));
  }, []);

  const toggleDarkMode = useCallback(function (
    darkMode: boolean | ((prevState: boolean) => boolean)
  ): void {
    startTransition(() => setIsDarkModeActive(darkMode));
  }, []);

  const setAppState = useCallback(function (
    key: string,
    value: unknown,
    isDev: boolean = false
  ): void {
    if (isDev) {
      startTransition(() =>
        dispatchDev({ type: "SET_GLOBAL_STATE_VALUE", key, value })
      );
    }
    startTransition(() =>
      dispatchUser({ type: "SET_GLOBAL_STATE_VALUE", key, value })
    );
  }, []);

  const getAppState = useCallback(
    function (isDev: boolean = false) {
      return isDev ? globalStateDev : globalStateUser;
    },
    [globalStateDev, globalStateUser]
  );
  const resetAppState = useCallback((isDev: boolean = false) => {
    if (isDev) {
      startTransition(() => dispatchDev({ type: "RESET_GLOBAL_STATE" }));
    }
    startTransition(() => dispatchUser({ type: "RESET_GLOBAL_STATE" }));
  }, []);

  const setNotificationState = useCallback(function (
    notification: notification
  ): void {
    startTransition(() =>
      dispatchNotification({
        type: "SET_GLOBAL_STATE_VALUE",
        key: notification.id,
        value: notification,
      })
    );
  }, []);

  const resetNotificationState = useCallback(function (): void {
    startTransition(() => dispatchNotification({ type: "RESET_GLOBAL_STATE" }));
  }, []);

  const removeNotificationState = useCallback(function (
    notificationId: string
  ): void {
    startTransition(() =>
      dispatchNotification({
        type: "REMOVE_GLOBAL_STATE_VALUE",
        key: notificationId,
      })
    );
  }, []);

  const memoizedGlobalContextValue: GlobalContextValues = useMemo(() => {
    return {
      devData: {
        mediaBreakpoints: mediaBreakpointsCustom || mediaBreakpoints,
        cssReset: cssResetCustom || cssReset,
        globalState: globalStateDev,
        isProviderActive: true,
        currentGlobalLanguage,
        currentBreakpoint,
        isDarkModeActive,
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
        setNotificationState,
        resetNotificationState,
        removeNotificationState,
        changeLanguage,
        toggleDarkMode,
        resetAppState,
        getAppState,
        setAppState,
      },
      userContext: {
        globalState: globalStateUser,
        resetAppState,
        getAppState,
        setAppState,
      },
      notifications: globalNotification,
    };
  }, [
    mediaBreakpointsCustom,
    cssResetCustom,
    globalStateDev,
    currentGlobalLanguage,
    currentBreakpoint,
    isDarkModeActive,
    commandsCustom,
    themeCustom,
    setNotificationState,
    resetNotificationState,
    removeNotificationState,
    changeLanguage,
    toggleDarkMode,
    resetAppState,
    getAppState,
    setAppState,
    globalStateUser,
    globalNotification,
  ]);

  useEffect(() => {
    if (window && window?.matchMedia("(prefers-color-scheme: dark)").matches)
      toggleDarkMode(true);
  }, [isDarkModeActive, toggleDarkMode]);

  return (
    <GlobalContext.Provider value={memoizedGlobalContextValue}>
      <Component
        flexDirection="column"
        elementName="Provider"
        scrollbarWidth="thin"
        fontFamily="Manrope"
        overflow="hidden"
        position="fixed"
        display="flex"
        height="100vh"
        width="100vw"
        ref={ref}
        left="0"
        top="0"
        webkitScrollbar={{
          backgroundColorRaw: scrollBarColorCustom.thumb,
          borderRadius: "0.5rem",
          zIndexRaw: 99999,
          height: "0.5rem",
          width: "0.3rem",
        }}
        webkitScrollbarThumb={{
          backgroundColorRaw: scrollBarColorCustom.track,
          borderRadius: "0.5rem",
          zIndexRaw: 99999,
        }}
        scrollbarColorRaw={scrollBarColorCustom}
        {...props}>
        {children}
        {/* <ToastManager notificationPlacement={notificationPlacement} /> */}
      </Component>
    </GlobalContext.Provider>
  );
});

export const Provider = React.memo(Factory);
