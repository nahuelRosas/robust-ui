import { EnhancedElementProps, GenericProperty } from "@robust-ui/constructor";
import { sizes, colors } from "@robust-ui/theme";

export interface SpinnerModelProps {
  model: "A" | "B" | "C";
  colors: {
    primary: keyof typeof colors;
    secondary: keyof typeof colors;
  };
}

export interface SpinnerProps extends EnhancedElementProps<HTMLDivElement> {
  size?: GenericProperty<keyof typeof sizes>;
  sizeRaw?: GenericProperty<string>;

  colors: {
    primary: GenericProperty<keyof typeof colors>;
    secondary: GenericProperty<keyof typeof colors>;
  };
  model: "A" | "B" | "C";
}

export interface SpinnerPropsClean
  extends EnhancedElementProps<HTMLDivElement> {
  size: keyof typeof sizes;
  sizeRaw?: string;
  colors: {
    primary: keyof typeof colors;
    secondary: keyof typeof colors;
  };
  model: "A" | "B" | "C";
}

export type ForwardRefExoticSpinner = Omit<SpinnerProps, "ref"> &
  React.RefAttributes<unknown> &
  SpinnerProps;
