import { colors, defaultTheme } from "@robust-ui/theme";

import {
  EnhancedElementProps,
  GenericPropertyArray,
  GenericProperty,
} from "@robust-ui/constructor";

export interface StyledTextProps
  extends EnhancedElementProps<HTMLSpanElement | HTMLParagraphElement> {
  styleMarker?: GenericProperty<string>;
  textColors?: GenericPropertyArray<keyof typeof colors>;
  textColorsRaw?: GenericPropertyArray<string>;
  fontWeights?: GenericPropertyArray<keyof typeof defaultTheme.fontWeight>;
  fontWeightsRaw?: GenericPropertyArray<string | string>;
  useRandomColors?: GenericProperty<boolean>;
  isMultiline?: GenericProperty<boolean>;
  isActive?: GenericProperty<boolean>;
}

export interface StyledTextPropsNoGeneric {
  children: React.ReactNode;
  multiLanguageSupport?: Record<string, React.ReactNode>;
  styleMarker?: string;
  textColors?: (keyof typeof colors)[];
  textColorsRaw?: string[];
  fontWeights?: (keyof typeof defaultTheme.fontWeight)[];
  fontWeightsRaw?: (string | number)[];
  useRandomColors?: boolean;
  isMultiline?: boolean;
  isActive?: boolean;
}

export type ForwardRefExoticStyledText = Omit<StyledTextProps, "ref"> &
  React.RefAttributes<unknown> &
  StyledTextProps;
