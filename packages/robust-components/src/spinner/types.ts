import { BaseProps } from "@/types";
import { defaultTheme } from "@robust-ui/theme";

export interface SpinnerProps extends BaseProps {
  size?: keyof typeof defaultTheme.sizes;
  model?: "A" | "B" | "C";
}

export interface SpinnerModelProps extends SpinnerProps {
  model: "A" | "B" | "C";
}
