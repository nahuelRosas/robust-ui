import { EnhancedProps, EnhancedPropsNoGeneric } from "@robust-ui/constructor";

export interface PathProps extends EnhancedProps<SVGPathElement> {
  strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  strokeWidth?: string;
  viewBox?: string;
  stroke?: string;
  fill?: string;
  d?: string;
}

export interface PathPropsNoGeneric
  extends EnhancedPropsNoGeneric<SVGPathElement> {
  strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  strokeWidth?: string;
  viewBox?: string;
  stroke?: string;
  fill?: string;
  d?: string;
}
