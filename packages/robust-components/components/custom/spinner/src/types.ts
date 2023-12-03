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
  complementaryColor?: GenericProperty<boolean>;
  size?: GenericProperty<keyof typeof sizes>;
  invertedColors?: GenericProperty<boolean>;
  model?: GenericProperty<"A">;
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

export interface SpinnerPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLDivElement> {
  complementaryColor?: boolean;
  invertedColors?: boolean;
  size: keyof typeof sizes;
  model?: "A";
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
