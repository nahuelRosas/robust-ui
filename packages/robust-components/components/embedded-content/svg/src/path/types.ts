import {
  EnhancedElementProps,
  EnhancedElementPropsNoGeneric,
} from "@robust-ui/constructor";

export interface PathProps extends EnhancedElementProps<SVGPathElement> {
  strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  strokeWidth?: string;
  viewBox?: string;
  stroke?: string;
  fill?: string;
  d?: string;
}

export interface PathPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<SVGPathElement> {
  strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  strokeWidth?: string;
  viewBox?: string;
  stroke?: string;
  fill?: string;
  d?: string;
}
