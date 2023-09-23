import { EnhancedElementProps } from "@robust-ui/constructor";

export interface BlockProps extends EnhancedElementProps<HTMLDivElement> {}

export type ForwardRefExoticBlock = Omit<BlockProps, "ref"> &
  React.RefAttributes<unknown> &
  BlockProps;
