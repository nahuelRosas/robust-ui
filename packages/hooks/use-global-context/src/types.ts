import { languageType, colors } from "@robust-ui/theme";

/**
 * Represents a type that can be either a complete object of type T,
 * or a partial object of type T, or a nested partial object of type T.
 *
 * @template T - The type of the object.
 */
type PartialOrNestedPartial<T> =
  | T
  | Partial<T>
  | Record<string, T>
  | Record<string, Partial<T>>
  | Record<string, Record<string, T>>
  | Record<string, Record<string, Partial<T>>>;

/**
 * Represents an entry in the event log.
 */
interface EventLogEntry {
  id: number;
  name: string;
  description: string;
  timestamp: string;
  severity: "info" | "warning" | "error";
}

/**
 * Represents the configuration options for a tool.
 */
export interface ToolConfig {
  language?: string;
  enableFeatureX?: boolean;
  enableFeatureY?: boolean;
  maxRetryAttempts?: number;
}

/**
 * Represents a set of developer tools for managing the application state and behavior.
 */
export interface DevTools {
  /**
   * Sets the value of a specific key in the application state.
   * @param key - The key of the state value to set.
   * @param value - The value to set for the specified key.
   * @param isDev - Indicates whether the operation is performed in a development environment.
   */
  setAppState: (key: string, value: unknown, isDev: boolean) => void;

  /**
   * Retrieves the value of a specific key from the application state.
   * @param isDev - Indicates whether the operation is performed in a development environment.
   * @returns The value associated with the specified key.
   */
  getAppState: (isDev: boolean) => unknown;

  /**
   * Resets the application state.
   * @param isDev - Indicates whether the operation is performed in a development environment.
   */
  resetAppState: (isDev: boolean) => void;

  /**
   * Changes the language of the application.
   * @param language - The new language to set.
   */
  changeLanguage: (language: languageType) => void;

  /**
   * Toggles the dark mode of the application.
   * @param isDarkModeActive - Indicates whether the dark mode should be activated or deactivated.
   */
  toggleDarkMode: (isDarkModeActive: boolean) => void;

  /**
   * Sets the notification state of the application.
   * @param notification - The notification object to set.
   */
  setNotificationState: (notification: notification) => void;

  /**
   * Resets the notification state of the application.
   */
  resetNotificationState: () => void;

  /**
   * Removes a specific notification from the notification state.
   * @param notificationId - The ID of the notification to remove.
   */
  removeNotificationState: (notificationId: string) => void;
}

/**
 * Represents a function that takes an argument of type unknown and returns a value of type unknown.
 */
type CommandFunction = (arg: unknown) => unknown;

/**
 * Interface representing the development data.
 */
export interface DevData {
  commands: Record<string, CommandFunction | string>;
  mediaBreakpoints: Record<string, number>;
  currentGlobalLanguage: languageType;
  globalState: Record<string, unknown>;
  currentBreakpoint: string | unknown;
  selectors: Record<string, unknown>;
  isBrowser: false | HTMLElement;
  eventLogs?: EventLogEntry[];
  isDarkModeActive: boolean;
  isProviderActive: boolean;
  isServer: boolean;
  cssReset: string;
  theme: Record<
    string,
    {
      [key: string | number]: unknown;
    }
  >;
  pathname: string;
}

/**
 * Represents the user context.
 */
export interface userContext {
  setAppState: (key: string, value: unknown, isDev: boolean) => void;
  getAppState: (isDev: boolean) => unknown;
  resetAppState: (isDev: boolean) => void;
  globalState: Record<string, unknown>;
}

/**
 * Represents a notification.
 */
export interface notification {
  variant?: PartialOrNestedPartial<"ghost" | "solid" | "outline" | "link">;
  colorScheme?: PartialOrNestedPartial<keyof typeof colors>;
  status?: PartialOrNestedPartial<
    "info" | "warning" | "success" | "error" | "default"
  >;
  opacityColorScheme?: PartialOrNestedPartial<number>;
  colorSchemeRaw?: PartialOrNestedPartial<string>;
  isClosable?: PartialOrNestedPartial<boolean>;
  onClose?: PartialOrNestedPartial<() => void>;
  description?: PartialOrNestedPartial<string>;
  altColor?: PartialOrNestedPartial<boolean>;
  label?: PartialOrNestedPartial<string>;
  duration?: number;
  id?: string;
}

/**
 * Represents the values of the global context.
 */
export interface GlobalContextValues {
  notifications: Record<string, unknown>;
  userContext: userContext;
  devTools: DevTools;
  devData: DevData;
}
