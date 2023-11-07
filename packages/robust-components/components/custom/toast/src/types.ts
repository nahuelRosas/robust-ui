import {
  EnhancedElementProps,
  EnhancedElementPropsNoGeneric,
  GenericProperty,
  GenericPropertyArray,
} from "@robust-ui/constructor";
import { colors, defaultTheme, sizes } from "@robust-ui/theme";
import { StyledTextProps } from "@robust-ui/nested-styled-text";
export interface ToastProps extends EnhancedElementProps<HTMLDivElement> {
  status?: GenericProperty<
    "info" | "warning" | "success" | "error" | "default"
  >;
  variant?: GenericProperty<"ghost" | "solid" | "outline" | "link">;
  colorScheme?: GenericProperty<keyof typeof colors>;
  opacityColorScheme?: GenericProperty<number>;
  colorSchemeRaw?: GenericProperty<string>;
  altColor?: GenericProperty<boolean>;
  isClosable?: GenericProperty<boolean>;
  onClose?: GenericProperty<() => void>;
  label?: GenericProperty<string>;
  description?: GenericProperty<string>;
}

export interface ToastPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLDivElement> {
  status?: "info" | "warning" | "success" | "error" | "default";
  variant?: "ghost" | "solid" | "outline" | "link";
  colorScheme?: keyof typeof colors;
  opacityColorScheme?: number;
  colorSchemeRaw?: string;
  isClosable?: boolean;
  altColor?: boolean;
  onClose?: () => void;
  label?: string;
  description?: string;
}
