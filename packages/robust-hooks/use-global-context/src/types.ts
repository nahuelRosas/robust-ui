import { Language, colors, defaultTheme, sizes } from "@robust-ui/theme";
import { StyledTextProps } from "@robust-ui/nested-styled-text";

type GenericProperty<T> =
  | T
  | Partial<T>
  | Record<string, T>
  | Record<string, Partial<T>>
  | Record<string, Record<string, T>>
  | Record<string, Record<string, Partial<T>>>;

type GenericPropertyArray<T> = GenericProperty<T>[] | GenericProperty<T> | T[];

// Interfaces

interface FrameworkInfo {
  version: string;
  lastUpdate: string;
  isDevMode: boolean;
  browserCompatibility: string[];
  developerFriendly: boolean;
  communitySupport: number;
}

interface EventLogEntry {
  id: number;
  name: string;
  description: string;
  timestamp: string;
  severity: "info" | "warning" | "error";
}

interface SupportedFrameworks {
  [frameworkName: string]: FrameworkInfo;
}

interface ExtensionDefinition {
  name: string;
  description: string;
  onActivate: () => void;
  onDeactivate: () => void;
  author: string;
  version: string;
}

export interface ToolConfig {
  language?: string;
  enableFeatureX?: boolean;
  enableFeatureY?: boolean;
  maxRetryAttempts?: number;
}

interface ServerEffect {
  requests: {
    promise: Promise<unknown>;
    id: number;
    cancel: Function;
  }[];
  resolved: boolean;
  current: number;
  dataContext: {
    [key: string]: {
      data?: unknown;
      error?: unknown;
      id?: number;
      [property: string]: unknown;
    };
  };
  timeout: number;
}

export interface DevTools {
  setAppState: (key: string, value: unknown, isDev: boolean) => void;
  changeLanguage: (language: keyof typeof Language) => void;
  toggleDarkMode: (isDarkModeActive: boolean) => void;
  getAppState: (isDev: boolean) => unknown;
  resetAppState: (isDev: boolean) => void;
  setNotificationState: (notification: notification) => void;
  resetNotificationState: () => void;
  removeNotificationState: (notificationId: string) => void;
}

export interface DevData {
  eventLogs?: EventLogEntry[];
  currentGlobalLanguage: keyof typeof Language;
  commands: Record<string, Function | string>;
  mediaBreakpoints: Record<string, number>;
  globalState: Record<string, unknown>;
  currentBreakpoint: string | unknown;
  selectors: Record<string, unknown>;
  isDarkModeActive: boolean;
  isProviderActive: boolean;
  cssReset: string;
  theme: Record<
    string,
    {
      [key: string | number]: unknown;
    }
  >;
}

export interface userContext {
  globalState: Record<string, unknown>;
  resetAppState: (isDev: boolean) => void;
  getAppState: (isDev: boolean) => unknown;
  setAppState: (key: string, value: unknown, isDev: boolean) => void;
}

export interface notification {
  id: string;
  duration: number;
  position?: GenericProperty<
    "topRight" | "top" | "topLeft" | "bottomRight" | "bottom" | "bottomLeft"
  >;
  colorScheme?: GenericProperty<keyof typeof colors>;
  textProps?: GenericProperty<StyledTextProps>;
  styleMarker?: GenericProperty<string>;
  textColors?: GenericPropertyArray<keyof typeof colors>;
  textColorsRaw?: GenericPropertyArray<string>;
  fontWeights?: GenericPropertyArray<keyof typeof defaultTheme.fontWeight>;
  fontWeightsRaw?: GenericPropertyArray<string | number>;
  icon?: GenericProperty<React.ReactNode>;
  variant?: GenericProperty<"solid" | "subtle" | "left-accent" | "top-accent">;
  headline?: GenericProperty<string>;
  description?: GenericProperty<string>;
  status?: GenericProperty<"success" | "error" | "warning" | "info">;
  isClosable?: GenericProperty<boolean>;
  size?: GenericProperty<keyof typeof sizes>;
  onClose?: GenericProperty<() => void>;
  [key: string]: unknown;
}

export interface GlobalContextValues {
  devData: DevData;
  devTools: DevTools;
  userContext: userContext;
  notifications: notification[];
}
