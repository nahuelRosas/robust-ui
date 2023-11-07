import { EnhancedElementProps } from "@robust-ui/constructor";
import { SVGAttributes } from "react";

export interface PathProps
  extends EnhancedElementProps<SVGAttributes<SVGPathElement>> {
  strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  strokeWidth?: string;
  viewBox?: string;
  stroke?: string;
  fill?: string;
  d?: string;
}
