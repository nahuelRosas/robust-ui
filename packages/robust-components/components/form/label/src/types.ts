import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";
import { colors } from "@robust-ui/theme";

export interface LabelProps extends EnhancedElementProps<HTMLLabelElement> {
  variant?: GenericProperty<"solid" | "outline" | "link" | "ghost">;
  colorScheme?: GenericProperty<keyof typeof colors>;
  opacityColorScheme?: GenericProperty<number>;
  colorSchemeRaw?: GenericProperty<string>;
  placeHolder?: GenericProperty<string>;
  isFocused?: GenericProperty<boolean>;
  isHovered?: GenericProperty<boolean>;
  altColor?: GenericProperty<boolean>;
  text?: GenericProperty<string>;
}

export interface LabelPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLLabelElement> {
  variant?: "solid" | "outline" | "link" | "ghost";
  colorScheme?: keyof typeof colors;
  opacityColorScheme?: number;
  colorSchemeRaw?: string;
  placeHolder?: string;
  isFocused?: boolean;
  isHovered?: boolean;
  altColor?: boolean;
  text?: string;
}
