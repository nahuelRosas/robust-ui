import { BaseProps } from "@/types";

export type CinematicDirection = "left" | "right" | "top" | "bottom";

export interface ScrollerProps extends BaseProps {
  scrollOption?: ScrollBehavior | undefined;
  disableScroll?: boolean;
  cinematicDirections?: CinematicDirection[];
  scrollDirection?: "vertical" | "horizontal";
  fullScreen?: boolean;
  propsItems?: BaseProps;
  sensitivityFactor?: number;
  disableOrientation?: "none" | "vertical" | "horizontal";
}

export type ForwardRefExoticFlex = Omit<ScrollerProps, "ref"> &
  React.RefAttributes<unknown> &
  ScrollerProps;
