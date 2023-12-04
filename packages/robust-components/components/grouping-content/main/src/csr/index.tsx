import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { GlobalStateReducer } from "@robust-ui/global-state-reducer";
import { useBreakpointValue } from "@robust-ui/use-breakpoint-value";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { ToastManager } from "@robust-ui/toast-manager";
import { ProviderProps } from "./types";
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
  ReactNode,
} from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<
  ForwardRefExotic<ProviderProps>
> = forwardRef(function ProviderComponent(
  {
    scrollBarColorCustom = {
      thumb: "rgba(255, 255, 255, 0.1)",
      track: "rgba(79, 209, 197, 0.5)",
    },
    mediaBreakpointsCustom,
    notificationPlacement,
    cssResetCustom,
    commandsCustom,
    themeCustom,
    children,
    ...props
  },
  ref,
): React.JSX.Element {
  const [globalStateDev, dispatchDev] = useReducer(GlobalStateReducer, {});
  const [globalStateUser, dispatchUser] = useReducer(GlobalStateReducer, {});
  const [globalNotification, dispatchNotification] = useReducer(
    GlobalStateReducer,
    {},
  );
  const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(false);
  const [currentGlobalLanguage, setCurrentGlobalLanguage] =
    useState<keyof typeof Language>("en");

  const Component = CreateComponent<HTMLElement>({
    componentType: "main",
  });

  const currentBreakpoint = useBreakpointValue({
    breakPoints: mediaBreakpointsCustom || mediaBreakpoints,
  });

  const changeLanguage = useCallback(function (
    language: keyof typeof Language,
  ): void {
    startTransition(() => setCurrentGlobalLanguage(language));
  }, []);

  const toggleDarkMode = useCallback(function (
    darkMode: boolean | ((prevState: boolean) => boolean),
  ): void {
    startTransition(() => setIsDarkModeActive(darkMode));
  }, []);

  const setAppState = useCallback(function (
    key: string,
    value: unknown,
    isDev: boolean = false,
  ): void {
    if (isDev) {
      startTransition(() =>
        dispatchDev({ type: "SET_GLOBAL_STATE_VALUE", key, value }),
      );
    }
    startTransition(() =>
      dispatchUser({ type: "SET_GLOBAL_STATE_VALUE", key, value }),
    );
  }, []);

  const getAppState = useCallback(
    function (isDev: boolean = false) {
      return isDev ? globalStateDev : globalStateUser;
    },
    [globalStateDev, globalStateUser],
  );
  const resetAppState = useCallback((isDev: boolean = false) => {
    if (isDev) {
      startTransition(() => dispatchDev({ type: "RESET_GLOBAL_STATE" }));
    }
    startTransition(() => dispatchUser({ type: "RESET_GLOBAL_STATE" }));
  }, []);

  const setNotificationState = useCallback(function (
    notification: notification,
  ): void {
    startTransition(() =>
      dispatchNotification({
        type: "SET_GLOBAL_STATE_VALUE",
        key: notification.id,
        value: notification,
      }),
    );
  }, []);

  const resetNotificationState = useCallback(function (): void {
    startTransition(() => dispatchNotification({ type: "RESET_GLOBAL_STATE" }));
  }, []);

  const removeNotificationState = useCallback(function (
    notificationId: string,
  ): void {
    startTransition(() =>
      dispatchNotification({
        type: "REMOVE_GLOBAL_STATE_VALUE",
        key: notificationId,
      }),
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
          ...commandsCustom,
          ...commands,
        },
        theme: {
          ...defaultTheme,
          ...themeCustom,
        },
        selectors: {
          ...commandsCustom,
          ...selectors,
        },
      },
      devTools: {
        removeNotificationState,
        resetNotificationState,
        setNotificationState,
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
    removeNotificationState,
    resetNotificationState,
    mediaBreakpointsCustom,
    currentGlobalLanguage,
    setNotificationState,
    globalNotification,
    currentBreakpoint,
    isDarkModeActive,
    globalStateUser,
    commandsCustom,
    cssResetCustom,
    globalStateDev,
    changeLanguage,
    toggleDarkMode,
    resetAppState,
    themeCustom,
    getAppState,
    setAppState,
  ]);

  useEffect(() => {
    if (window && window?.matchMedia("(prefers-color-scheme: dark)").matches)
      toggleDarkMode(true);
  }, [isDarkModeActive, toggleDarkMode]);

  const { ...cleanedProps } = useCleanValue({
    props,
    context: {
      mediaBreakpoints: mediaBreakpointsCustom || mediaBreakpoints,
      currentGlobalLanguage,
      currentBreakpoint,
      isDarkModeActive,
      theme: {
        ...defaultTheme,
        ...themeCustom,
      },
    },
  });

  return (
    <GlobalContext.Provider value={memoizedGlobalContextValue}>
      <Component
        flexDirection="column"
        elementName="Provider"
        scrollbarWidth="thin"
        fontFamily="Manrope"
        overflowX="hidden"
        overflowY="auto"
        position="fixed"
        display="flex"
        height="100dvh"
        width="100dvw"
        ref={ref}
        left="0"
        top="0"
        webkitScrollbar={{
          backgroundColorRaw: scrollBarColorCustom.thumb,
          borderRadius: "1.5dvh",
          zIndexRaw: 99999,
          height: "0.5dvh",
          width: "1.5dvh",
        }}
        webkitScrollbarThumb={{
          backgroundColorRaw: scrollBarColorCustom.track,
          borderRadius: "1.5dvh",
          zIndexRaw: 99999,
        }}
        scrollbarColorRaw={scrollBarColorCustom}
        {...cleanedProps}
      >
        {children}
        <ToastManager notificationPlacement={notificationPlacement} />
      </Component>
    </GlobalContext.Provider>
  );
});

export const Provider = React.memo(Factory);
