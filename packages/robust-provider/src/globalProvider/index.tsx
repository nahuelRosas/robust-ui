import { useBreakpointValue, useFrameworkDetection } from "@robust-ui/hooks";
import {
  useMemo,
  useReducer,
  useState,
  useRef,
  useCallback,
  useInsertionEffect,
} from "react";
import { GlobalStateReducer, RobustGlobalContext } from "@robust-ui/contexts";
import { Constructor } from "@robust-ui/constructor";
import { GlobalProviderProps } from "./types";
import { Language } from "@robust-ui/theme";
import React from "react";

/**
 * GlobalProvider component provides a global context to its children
 * with various state variables and functions.
 *
 * @component
 * @param {GlobalProviderProps} props - The component props.
 * @returns {JSX.Element | null} The rendered component.
 */
function Factory({
  children,
  ...props
}: GlobalProviderProps): JSX.Element | null {
  try {
    // State variables
    const [globalState, dispatch] = useReducer(GlobalStateReducer, {});
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState<keyof typeof Language>("en");
    const framework = useFrameworkDetection();
    // Refs
    const activeProviderState = useRef(false);
    const generatedGlobalRef = useRef({});
    const isMounted = useRef(false);

    // Constructor Provider
    const Provider = useMemo(() => {
      return Constructor({
        Component: "div",
      });
    }, []);
    // Callback functions
    /**
     * Reset the generated global IDs.
     */
    const resetGeneratedIds = useCallback(() => {
      generatedGlobalRef.current = {};
    }, []);

    /**
     * Reset the global state to an empty object.
     */
    const resetGlobalState = useCallback(() => {
      dispatch({ type: "RESET_GLOBAL_STATE" });
    }, []);
    /**
     * Set a value in the global state with the specified key.
     *
     * @param {string} key - The key to set in the global state.
     * @param {unknown} value - The value to set for the specified key.
     */
    const setGlobalStateValue = useCallback((key: string, value: unknown) => {
      dispatch({ type: "SET_GLOBAL_STATE_VALUE", key, value });
    }, []);
    /**
     * Change the language to the specified value.
     *
     * @param {string} newLanguage - The new language value.
     */
    const changeLanguage = useCallback(
      function (
        newLanguage: React.SetStateAction<keyof typeof Language>,
      ): void {
        if (typeof newLanguage === "function") {
          setLanguage((prevState) => {
            return newLanguage(prevState);
          });
          return;
        }
        if (newLanguage === language) {
          return;
        }
        setLanguage(newLanguage);
      },
      [language],
    );
    /**
     * Toggle the dark mode based on the specified value.
     *
     * @param {boolean} darkMode - The new value for dark mode.
     */
    const toggleDarkMode = useCallback(function (
      darkMode: boolean | ((prevState: boolean) => boolean),
    ): void {
      setIsDarkMode(darkMode);
    }, []);
    /**
     * Get the current global state object.
     *
     * @returns {object} The global state object.
     */
    const getGlobalState = useCallback(() => {
      return globalState;
    }, [globalState]);
    // Get the current breakpoint value using useBreakpointValue hook
    const breakpointValue = useBreakpointValue({
      values: {
        base: "base",
        xxs: "xxs",
        xs: "xs",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl",
        xxl: "xxl",
        xxxl: "xxxl",
      },
    });

    // Check if the provider is active based on the breakpoint value
    useInsertionEffect(() => {
      if (!activeProviderState.current) {
        activeProviderState.current = true;
        return;
      }
    }, [breakpointValue]);
    // Get the current state of the provider
    const isProviderActive = activeProviderState.current;
    // Create the memoized global context object
    const memoizedGlobalContext = useMemo(() => {
      return {
        resetGeneratedIds,
        resetGlobalState,
        globalState,
        setGlobalStateValue,
        getGlobalState,
        breakpointValue,
        isProviderActive,
        isDarkMode,
        globalLanguage: language,
        changeLanguage,
        toggleDarkMode,
        framework,
      };
    }, [
      resetGeneratedIds,
      resetGlobalState,
      globalState,
      setGlobalStateValue,
      getGlobalState,
      breakpointValue,
      isProviderActive,
      isDarkMode,
      language,
      changeLanguage,
      toggleDarkMode,
      framework,
    ]);
    // Set the isMounted ref when the component is mounted
    useInsertionEffect(() => {
      if (!isMounted.current) {
        isMounted.current = true;
      }
    }, []);
    // Return null if the component is not mounted or running on the server
    if (!isMounted.current || typeof window === "undefined") {
      return null;
    }
    // Render the component with the global context provider
    return (
      <RobustGlobalContext.Provider value={memoizedGlobalContext}>
        <Provider
          componentName="GlobalProvider"
          fontFamily="Manrope"
          display="flex"
          flexDirection="column"
          width="100%"
          height="100%"
          position="fixed"
          top="0"
          left="0"
          overflow="hidden"
          webkitScrollbar={{
            width: "0.3rem",
            height: "0.5rem",
            backgroundColorRaw: "rgba(255, 255, 255, 0.1)",
            borderRadius: "0.5rem",
            zIndexRaw: 99999,
          }}
          webkitScrollbarThumb={{
            backgroundColorRaw: "rgba(255, 255, 255, 0.2)",
            borderRadius: "0.5rem",
            zIndexRaw: 99999,
          }}
          scrollbarColor="rgba(255, 255, 255, 0.1) rgba(255, 255, 255, 0.2)"
          scrollbarWidth="thin"
          {...props}
        >
          {children}
        </Provider>
      </RobustGlobalContext.Provider>
    );
  } catch (error) {
    throw new Error(`[GlobalProvider]: ${error}`);
  }
}

export const GlobalProvider = React.memo(Factory);
