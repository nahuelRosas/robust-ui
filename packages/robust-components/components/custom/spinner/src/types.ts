import { sizes, colors } from "@robust-ui/theme";
import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";

export interface SpinnerModelProps {
  model: "A";
  colors?: {
    primary: keyof typeof colors;
    secondary: keyof typeof colors;
  };
  colorsRaw?: {
    primary: string;
    secondary: string;
  };
}

export interface SpinnerProps extends EnhancedElementProps<HTMLDivElement> {
  variant?: GenericProperty<"solid" | "outline" | "link" | "ghost">;
  colorScheme?: GenericProperty<keyof typeof colors>;
  opacityColorScheme?: GenericProperty<number>;
  size?: GenericProperty<keyof typeof sizes>;
  colorSchemeRaw?: GenericProperty<string>;
  model?: GenericProperty<"A">;
  altColor?: GenericProperty<boolean>;
  sizeRaw?: GenericProperty<string>;

  colors?: GenericProperty<{
    primary: keyof typeof colors;
    secondary: keyof typeof colors;
  }>;
  colorsRaw?: GenericProperty<{
    primary: string;
    secondary: string;
  }>;
}

export interface SpinnerPropsClean
  extends EnhancedElementPropsNoGeneric<HTMLDivElement> {
  variant?: "solid" | "outline" | "link" | "ghost";
  colorScheme: keyof typeof colors;
  opacityColorScheme: number;
  size: keyof typeof sizes;
  colorSchemeRaw?: string;
  model?: "A";
  altColor?: boolean;
  sizeRaw?: string;
  colors?: {
    primary: keyof typeof colors;
    secondary: keyof typeof colors;
  };
  colorsRaw?: {
    primary: string;
    secondary: string;
  };
}
