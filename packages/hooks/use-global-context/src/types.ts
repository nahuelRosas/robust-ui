import { languageType, colors } from "@robust-ui/theme";

type PartialOrNestedPartial<T> =
  | T
  | Partial<T>
  | Record<string, T>
  | Record<string, Partial<T>>
  | Record<string, Record<string, T>>
  | Record<string, Record<string, Partial<T>>>;

interface EventLogEntry {
  id: number;
  name: string;
  description: string;
  timestamp: string;
  severity: "info" | "warning" | "error";
}

export interface ToolConfig {
  language?: string;
  enableFeatureX?: boolean;
  enableFeatureY?: boolean;
  maxRetryAttempts?: number;
}

export interface DevTools {
  setAppState: (key: string, value: unknown, isDev: boolean) => void;
  getAppState: (isDev: boolean) => unknown;
  resetAppState: (isDev: boolean) => void;
  changeLanguage: (language: languageType) => void;
  toggleDarkMode: (isDarkModeActive: boolean) => void;
  setNotificationState: (notification: notification) => void;
  resetNotificationState: () => void;
  removeNotificationState: (notificationId: string) => void;
}

type CommandFunction = (arg: unknown) => unknown;

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

export interface userContext {
  globalState: Record<string, unknown>;
  setAppState: (key: string, value: unknown, isDev: boolean) => void;
  getAppState: (isDev: boolean) => unknown;
  resetAppState: (isDev: boolean) => void;
}

export interface notification {
  id?: string;
  duration?: number;
  status?: PartialOrNestedPartial<
    "info" | "warning" | "success" | "error" | "default"
  >;
  variant?: PartialOrNestedPartial<"ghost" | "solid" | "outline" | "link">;
  colorScheme?: PartialOrNestedPartial<keyof typeof colors>;
  opacityColorScheme?: PartialOrNestedPartial<number>;
  colorSchemeRaw?: PartialOrNestedPartial<string>;
  altColor?: PartialOrNestedPartial<boolean>;
  isClosable?: PartialOrNestedPartial<boolean>;
  onClose?: PartialOrNestedPartial<() => void>;
  label?: PartialOrNestedPartial<string>;
  description?: PartialOrNestedPartial<string>;
}

export interface GlobalContextValues {
  devData: DevData;
  devTools: DevTools;
  userContext: userContext;
  notifications: Record<string, unknown>;
}
