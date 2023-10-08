import { EnhancedElementProps } from "@robust-ui/constructor";

export interface HeaderProps extends EnhancedElementProps<HTMLHeadingElement> {}

export type ForwardRefExoticHeader = Omit<HeaderProps, "ref"> &
  React.RefAttributes<unknown> &
  HeaderProps;
