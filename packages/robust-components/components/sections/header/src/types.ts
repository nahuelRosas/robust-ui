import { colors } from "@robust-ui/theme";
import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";

export interface HeaderProps extends EnhancedElementProps<HTMLHeadingElement> {
  colorScheme?: GenericProperty<keyof typeof colors>;
  opacityColorScheme?: GenericProperty<number>;
  colorSchemeRaw?: GenericProperty<string>;
}

export interface HeaderPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLHeadingElement> {
  colorScheme?: keyof typeof colors;
  opacityColorScheme?: number;
  colorSchemeRaw?: string;
}
