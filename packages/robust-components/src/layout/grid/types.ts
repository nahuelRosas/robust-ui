import { BaseProps } from "@/types";

export interface GridProps extends BaseProps {}

export type ForwardRefExoticGrid = Omit<GridProps, "ref"> &
  React.RefAttributes<unknown> &
  GridProps;
