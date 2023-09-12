import { BaseProps } from "@/types";

export interface FlexProps extends BaseProps {}

export type ForwardRefExoticFlex = Omit<FlexProps, "ref"> &
  React.RefAttributes<unknown> &
  FlexProps;
