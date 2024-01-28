import { sizes, colors } from "@robust-ui/theme";
import {
  PartialOrNestedPartial,
  EnhancedProps,
  EnhancedPropsNoGeneric,
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

export interface SpinnerProps extends EnhancedProps<HTMLDivElement> {
  complementaryColor?: PartialOrNestedPartial<boolean>;
  size?: PartialOrNestedPartial<keyof typeof sizes>;
  invertedColors?: PartialOrNestedPartial<boolean>;
  model?: PartialOrNestedPartial<"A">;
  sizeRaw?: PartialOrNestedPartial<string>;
  colors?: PartialOrNestedPartial<{
    primary: keyof typeof colors;
    secondary: keyof typeof colors;
  }>;
  colorsRaw?: PartialOrNestedPartial<{
    primary: string;
    secondary: string;
  }>;
}

export interface SpinnerPropsNoGeneric
  extends EnhancedPropsNoGeneric<HTMLDivElement> {
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
