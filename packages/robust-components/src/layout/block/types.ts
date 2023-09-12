import { BaseProps } from "@/types";

export interface BlockProps extends BaseProps {}

export type ForwardRefExoticBlock = Omit<BlockProps, "ref"> &
  React.RefAttributes<unknown> &
  BlockProps;
