// Interfaces
interface FrameworkInformation {
  version: string;
  lastUpdate: string;
  isDevelopmentMode: boolean;
  browserCompatibility: string[];
}

interface EventLogEntry {
  eventId: number;
  eventName: string;
  description: string;
  timestamp: string;
}

interface SupportedFrameworks {
  [frameworkName: string]: FrameworkInformation;
}

interface ExtensionDefinition {
  name: string;
  description: string;
  onActivate: () => void;
  onDeactivate: () => void;
}

interface ThemeConfiguration {
  [themeKey: string]: string;
}

// Tool Configuration
export interface ToolConfiguration {
  language: string;
  enableFeatureX: boolean;
}

// Developer Tools
export interface DeveloperTools {
  eventLogs: EventLogEntry[];
  supportedFrameworks: SupportedFrameworks;
  isProviderActive: boolean;
  resetGeneratedIds: () => void;
  resetGlobalState: () => void;
  toggleDarkMode: () => void;
  getGlobalState: (key: string) => unknown;
  globalState: Record<string, unknown>;
  setGlobalState: (key: string, value: unknown) => void;
  loadExtension: (extension: ExtensionDefinition) => void;
}

// User Tools
export interface UserTools {
  changeGlobalLanguage: (language: string) => void;
  toggleDarkMode: (isDarkModeActive: boolean) => void;
  isDarkModeActive: boolean;
  currentGlobalLanguage: string;
  currentBreakpoint: string | undefined;
  loadCustomTheme: (theme: ThemeConfiguration) => void;
}

// Context
export interface GlobalContextValues {
  developerTools: DeveloperTools;
  userTools: UserTools;
  toolConfiguration: ToolConfiguration;
}
