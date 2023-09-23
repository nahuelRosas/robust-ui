import { EnhancedElementProps } from "@robust-ui/constructor";

export interface GridProps extends EnhancedElementProps<HTMLDivElement> {}

export type ForwardRefExoticGrid = Omit<GridProps, "ref"> &
  React.RefAttributes<unknown> &
  GridProps;
