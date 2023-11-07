import { colors, defaultTheme } from "@robust-ui/theme";

import {
  EnhancedElementProps,
  GenericPropertyArray,
  EnhancedElementPropsNoGeneric,
  GenericProperty,
} from "@robust-ui/constructor";

export interface StyledTextProps
  extends EnhancedElementProps<HTMLSpanElement | HTMLParagraphElement> {
  styleMarker?: GenericProperty<string>;
  textColors?: GenericPropertyArray<keyof typeof colors>;
  textColorsRaw?: GenericPropertyArray<string>;
  fontWeights?: GenericPropertyArray<keyof typeof defaultTheme.fontWeight>;
  fontWeightsRaw?: GenericPropertyArray<string | number>;
  useRandomColors?: GenericProperty<boolean>;
  isMultiline?: GenericProperty<boolean>;
  isActive?: GenericProperty<boolean>;
}

export interface StyledTextPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<
    HTMLSpanElement | HTMLParagraphElement
  > {
  children: React.ReactNode;
  styleMarker?: string;
  textColors?: (keyof typeof colors)[];
  textColorsRaw?: string[];
  fontWeights?: (keyof typeof defaultTheme.fontWeight)[];
  fontWeightsRaw?: (string | number)[];
  useRandomColors?: boolean;
  isMultiline?: boolean;
  isActive?: boolean;
}
