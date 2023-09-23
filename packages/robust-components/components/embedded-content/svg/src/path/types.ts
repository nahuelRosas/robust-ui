import { EnhancedElementProps } from "@robust-ui/constructor";

export interface PathProps extends EnhancedElementProps<HTMLOrSVGElement> {
  stroke?: string;
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
  fill?: string;
  d?: string;
  viewBox?: string;
  strokeWidth?: string;
}

export type ForwardRefExoticPath = Omit<PathProps, "ref"> &
  React.RefAttributes<unknown> &
  PathProps;
