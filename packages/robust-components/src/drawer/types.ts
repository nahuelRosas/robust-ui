import { BaseProps } from "@/types";

export interface DrawerProps extends BaseProps {
  open?: boolean;
  toggleOpen?: () => void;
  placement?: "left" | "right" | "top" | "bottom";
  size?: "base" | "sm" | "md" | "lg" | "xl" | "full";
  passClose?: boolean;
}

export type ForwardRefExoticDrawer = Omit<DrawerProps, "ref"> &
  React.RefAttributes<unknown> &
  DrawerProps;
