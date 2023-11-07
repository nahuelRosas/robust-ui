import { colors } from "@robust-ui/theme";
import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";

export interface FooterProps extends EnhancedElementProps<HTMLHeadingElement> {
  colorScheme?: GenericProperty<keyof typeof colors>;
  opacityColorScheme?: GenericProperty<number>;
  colorSchemeRaw?: GenericProperty<string>;
}

export interface FooterPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLHeadingElement> {
  colorScheme?: keyof typeof colors;
  opacityColorScheme?: number;
  colorSchemeRaw?: string;
}

