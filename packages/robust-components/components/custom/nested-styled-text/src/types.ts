import { colors, defaultTheme } from "@robust-ui/theme";
import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericPropertyArray,
  GenericProperty,
} from "@robust-ui/constructor";

export interface StyledTextProps extends EnhancedElementProps<HTMLDivElement> {
  fontWeights?: GenericPropertyArray<keyof typeof defaultTheme.fontWeight>;
  fontWeightsRaw?: GenericPropertyArray<string | number>;
  colors?: GenericPropertyArray<keyof typeof colors>;
  colorsRaw?: GenericPropertyArray<string>;
  randomColors?: GenericProperty<boolean>;
  isActive?: GenericProperty<boolean>;
  splitter?: GenericProperty<string>;
}

export interface StyledTextPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLDivElement> {
  fontWeights?: (keyof typeof defaultTheme.fontWeight)[];
  fontWeightsRaw?: (string | number)[];
  colors?: (keyof typeof colors)[];
  colorsRaw?: string[];
  randomColors?: boolean;
  isActive?: boolean;
  splitter?: string;
}
