import {
  EnhancedElementProps,
  GenericProperty,
  GenericPropertyArray,
} from "@robust-ui/constructor";
import { StyledTextProps } from "@robust-ui/nested-styled-text";
import { colors, defaultTheme } from "@robust-ui/theme";

export interface CodeTextProps
  extends EnhancedElementProps<HTMLSpanElement | HTMLParagraphElement> {
  textProps?: GenericProperty<StyledTextProps>;
  styleMarker?: GenericProperty<string>;
  textColors?: GenericPropertyArray<keyof typeof colors>;
  textColorsRaw?: GenericPropertyArray<string>;
  fontWeights?: GenericPropertyArray<keyof typeof defaultTheme.fontWeight>;
  fontWeightsRaw?: GenericPropertyArray<string | number>;
  colorScheme?: GenericProperty<keyof typeof colors>;
  variant?: GenericProperty<"solid" | "outline" | "ghost">;
}

export interface CodeTextPropsNoGeneric
  extends EnhancedElementProps<HTMLSpanElement | HTMLParagraphElement> {
  textProps?: StyledTextProps;
  styleMarker?: string;
  textColors?: (keyof typeof colors)[];
  textColorsRaw?: string[];
  fontWeights?: (keyof typeof defaultTheme.fontWeight)[];
  fontWeightsRaw?: (string | number)[];
  colorScheme?: keyof typeof colors;
  variant?: "solid" | "outline" | "ghost";
}

export type ForwardRefExoticCodeText = Omit<CodeTextProps, "ref"> &
  React.RefAttributes<unknown> &
  CodeTextProps;
