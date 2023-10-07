import { GenericProperty, GenericPropertyArray } from "@robust-ui/constructor";
import { StyledTextProps } from "@robust-ui/nested-styled-text";
import { colors, defaultTheme, sizes } from "@robust-ui/theme";
export type FunctionType<T> = ((prevState: T) => T) | T;

export type UseGlobalStateProps<T> = {
  key?: string;
  defaultValue?: T;
  isDev?: boolean;
};

export interface notificationPropsHook {
  id?: string;
  duration?: number;
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
  position?: GenericProperty<
    "topRight" | "top" | "topLeft" | "bottomRight" | "bottom" | "bottomLeft"
  >;
  size?: GenericProperty<keyof typeof sizes>;
  onClose?: GenericProperty<() => void>;
  [key: string]: unknown;
}
