import {
  EnhancedElementProps,
  GenericProperty,
  GenericPropertyArray,
} from "@robust-ui/constructor";
import { colors, defaultTheme, sizes } from "@robust-ui/theme";
import { StyledTextProps } from "@robust-ui/nested-styled-text";
export interface ToastProps extends EnhancedElementProps<HTMLDivElement> {
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
}

export interface ToastPropsClean extends EnhancedElementProps<HTMLDivElement> {
  colorScheme?: keyof typeof colors;
  textProps?: StyledTextProps;
  styleMarker?: string;
  textColors?: (keyof typeof colors)[];
  textColorsRaw?: string[];
  fontWeights?: (keyof typeof defaultTheme.fontWeight)[];
  fontWeightsRaw?: (string | number)[];
  icon?: React.ReactNode;
  variant?: "solid" | "subtle" | "left-accent" | "top-accent";
  headline?: string;
  description?: string;
  status?: "success" | "error" | "warning" | "info";
  duration?: number;
  isClosable?: boolean;
  position?:
    | "topRight"
    | "top"
    | "topLeft"
    | "bottomRight"
    | "bottom"
    | "bottomLeft";
  size?: keyof typeof sizes;
  onClose?: () => void;
}

export type ForwardRefExoticToast = Omit<ToastProps, "ref"> &
  React.RefAttributes<unknown> &
  ToastProps;
