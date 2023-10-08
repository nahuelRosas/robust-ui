import { EnhancedElementProps } from "@robust-ui/constructor";

export interface FlexProps extends EnhancedElementProps<HTMLDivElement> {}

export type ForwardRefExoticFlex = Omit<FlexProps, "ref"> &
  React.RefAttributes<unknown> &
  FlexProps;
